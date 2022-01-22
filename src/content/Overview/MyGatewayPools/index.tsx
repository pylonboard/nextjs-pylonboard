import {
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  styled,
  Typography
} from '@mui/material';
import numeral from 'numeral';
import Decimal from 'decimal.js';
import StepperProgress from '@/components/StepperProgress';
import { gql, useLazyQuery } from '@apollo/client';
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import { useEffect, useState } from 'react';
import { poolsByIdentifier } from '@/content/DashboardPages/gateway-pools/pools';
import { amountFormatter } from '@/utils/numberFormatters';
import Error from '@/components/Error';
import WalletConnect from '@/components/WalletConnect';

const QUERY = gql`
    query MyGatewayPools($terraWallet: String!) {
        myGatewayPools(terraWallet: $terraWallet) {
            poolIdentifier
            friendlyName
            totalDepositAmount
            totalWithdrawnAmount
            totalClaimedAmount
            totalClaimedAmountInUst
            claimedAmountToUstMultiplier
            rewardDenominator
            poolContractAddress
            startedAt
            claimAt
            withdrawAt
        }
    }
`;

const getRewardsUrl = ({ poolContractAddress, walletAddress }) => {
  const baseUrl = 'https://lcd.terra.dev/wasm/contracts';
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const query = {
    claimable_reward: {
      owner: walletAddress,
      timestamp
    }
  };
  const query_str = JSON.stringify(query);

  return `${baseUrl}/${poolContractAddress}/store?query_msg=${query_str}`;
};

function MyGatewayPools() {
  const [myWalletAddress, setMyWalletAddress] = useState(null);
  const [myGatewayPools, setMyGatewayPools] = useState([]);
  const { wallets, status } = useWallet();
  const [getMyGatewayPools, { data, loading, error }] = useLazyQuery(QUERY);

  useEffect(() => {
    status === WalletStatus.WALLET_CONNECTED &&
    setMyWalletAddress(wallets[0].terraAddress);
  }, [status]);

  useEffect(() => {
    myWalletAddress &&
    getMyGatewayPools({
      variables: {
        terraWallet: myWalletAddress
      }
    });
  }, [myWalletAddress]);

  useEffect(() => {
    if (data && data.myGatewayPools.length) {
      setMyGatewayPools(data.myGatewayPools);
    }
  }, [data]);

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <TypographyHeading variant='h3'>
              {'My Gateway Pools'}
            </TypographyHeading>
          </Box>
        </Grid>

        {error ? (
          <Grid item xs={12}>
            <Error message={error.message} />
          </Grid>
        ) : loading ? (
          <Grid item xs={12}>
            <Skeleton variant='rectangular' height={300} />
          </Grid>
        ) : myGatewayPools.length > 0 ? (
          myGatewayPools.map(
            ({
               poolIdentifier,
               poolContractAddress,
               friendlyName,
               totalDepositAmount,
               totalWithdrawnAmount,
               totalClaimedAmount,
               totalClaimedAmountInUst,
               claimedAmountToUstMultiplier,
               rewardDenominator,
               startedAt,
               claimAt,
               withdrawAt
             }) => (
              <Grid key={friendlyName} item xs={12} sm={6} lg={4}>
                <PoolCard
                  title={poolsByIdentifier[poolIdentifier].title}
                  logo={poolsByIdentifier[poolIdentifier].logo}
                  rewardDenominator={rewardDenominator}
                  rewardsUrl={getRewardsUrl({
                    poolContractAddress,
                    walletAddress: myWalletAddress
                  })}
                  totalDepositAmount={totalDepositAmount-Math.abs(totalWithdrawnAmount)}
                  totalClaimedAmount={totalClaimedAmount}
                  totalClaimedAmountInUst={totalClaimedAmountInUst}
                  claimedAmountToUstMultiplier={claimedAmountToUstMultiplier}
                  startedAt={startedAt}
                  rewardsClaimableAt={claimAt}
                  poolEndsAt={withdrawAt}
                />
              </Grid>
            )
          )
        ) : (
          <Grid item xs={12} alignItems='center'>
            {status === WalletStatus.WALLET_NOT_CONNECTED && (
              <Box>
                <Typography
                  sx={{
                    mb: 1.5,
                    fontWeight: 'normal'
                  }}
                  variant='h4'
                  component='p'
                >
                  Connect your wallet to see your pools
                </Typography>
                <WalletConnect />
              </Box>
            )}
            {status === WalletStatus.WALLET_CONNECTED && (
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    marginY: 1.5,
                    fontWeight: 'normal'
                  }}
                  variant='h3'
                  component='p'
                >
                  No Gateway Pools found
                </Typography>
              </Box>
            )}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default MyGatewayPools;

const TypographyHeading = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
      
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
`
);

const PoolCard = ({
                    logo,
                    title,
                    rewardDenominator,
                    totalDepositAmount,
                    rewardsUrl,
                    totalClaimedAmount,
                    totalClaimedAmountInUst,
                    claimedAmountToUstMultiplier,
                    startedAt,
                    rewardsClaimableAt,
                    poolEndsAt
                  }) => {
  const [rewards, setRewards] = useState(0);
  const [rewardsInUst, setRewardsInUst] = useState(0);
  const [rewardsError, setRewardsError] = useState('');
  const [loadingRewards, setLoadingRewards] = useState(false);

  useEffect(() => {
    if (rewardsUrl) {
      setLoadingRewards(true);
      fetch(rewardsUrl)
        .then((res) => res.json())
        .then(({ result, error }) => {
          if (result) {
            const totalRewards = new Decimal(result.amount)
              .div(1_000_000)
              .toNumber();
            setRewards(totalRewards);
            setRewardsInUst(totalRewards * claimedAmountToUstMultiplier);
          } else if (error) {
            setRewardsError('Error fetching data');
          }
        })
        .finally(() => {
          setLoadingRewards(false);
        });
    }
  }, []);

  return (
    <Card
      sx={{
        px: 2,
        py: 3
      }}
    >
      <Box display='flex' alignItems='center'>
        <AvatarWrapper>
          <img src={logo} alt={title} />
        </AvatarWrapper>
        <Typography
          sx={{
            ml: 1.5,
            fontWeight: 'normal'
          }}
          variant='h3'
          component='h3'
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ mt: 1.5 }}>
        <Stack
          divider={<Divider orientation='horizontal' flexItem />}
          spacing={0}
        >
          <Box py={1}>
            <Typography variant='subtitle2'>{'Deposits'}</Typography>
            <Typography variant='h3'>
              {numeral(totalDepositAmount).format('0,000.[00]')} UST
            </Typography>
            <Typography variant='subtitle1'>
              {numeral(totalDepositAmount).format('$0,000.[0000]')}
            </Typography>
          </Box>

          <Box py={1}>
            <Typography variant='subtitle2'>{'Pending rewards'}</Typography>
            {!loadingRewards && rewardsError ? (
              <Typography variant='h3' color='error'>
                {rewardsError}
              </Typography>
            ) : (
              <>
                <Typography variant='h3'>
                  {loadingRewards ? (
                    <Skeleton />
                  ) : (
                    `${amountFormatter(rewards)} ${rewardDenominator}`
                  )}
                </Typography>
                <Typography
                  variant='subtitle1'
                  sx={{ display: 'inline-block' }}
                >
                  {loadingRewards ? (
                    <Skeleton />
                  ) : (
                    numeral(rewardsInUst).format(
                      '$0,000.[0000]'
                    )
                  )}
                </Typography>
              </>
            )}
          </Box>

          <Box py={1}>
            <Typography variant='subtitle2'>{'Claimed rewards'}</Typography>
            <Typography variant='h3'>
              {`${amountFormatter(totalClaimedAmount)} ${rewardDenominator}`}
            </Typography>
            <Typography variant='subtitle1'>
              {numeral(totalClaimedAmountInUst).format('$0,000.[0000]')}
            </Typography>
          </Box>

          <Box mt={4}>
            <StepperProgress
              startedAt={startedAt}
              rewardsClaimableAt={rewardsClaimableAt}
              poolEndsAt={poolEndsAt}
            />
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

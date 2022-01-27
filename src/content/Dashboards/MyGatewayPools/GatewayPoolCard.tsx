import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  Divider,
  Skeleton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import numeral from 'numeral';
import Decimal from 'decimal.js';
import StepperProgress from '@/components/StepperProgress';
import { useEffect, useState } from 'react';
import { amountFormatter } from '@/utils/numberFormatters';
import GatewayPoolDetails from '@/content/Dashboards/MyGatewayPools/GatewayPoolDetails';

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

export const GatewayPoolCard = ({
  walletAddress,
  poolContractId,
  logo,
  title,
  rewardDenominator,
  rewardUAmountDivisor,
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
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setOpen(true);
  };

  const handleCloseModal = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    if (rewardsUrl) {
      setLoadingRewards(true);
      fetch(rewardsUrl)
        .then((res) => res.json())
        .then(({ result, error }) => {
          if (result) {
            const totalRewards = new Decimal(result.amount)
              .div(rewardUAmountDivisor)
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
    <>
      <Card>
        <CardActionArea
          onClick={handleOpenModal}
          disableRipple
        >
          <GatewayPoolCardContent
            logo={logo}
            title={title}
            rewardsInUst={rewardsInUst}
            rewardDenominator={rewardDenominator}
            totalDepositAmount={totalDepositAmount}
            rewards={rewards}
            totalClaimedAmount={totalClaimedAmount}
            totalClaimedAmountInUst={totalClaimedAmountInUst}
            startedAt={startedAt}
            rewardsClaimableAt={rewardsClaimableAt}
            poolEndsAt={poolEndsAt}
            loading={loadingRewards}
            error={rewardsError}
          />
        </CardActionArea>
      </Card>
      <GatewayPoolDetails
        title={title}
        logo={logo}
        handleClose={handleCloseModal}
        isOpen={isOpen}
        terraWallet={walletAddress}
        poolContractId={poolContractId}
      />
    </>
  );
};

export const GatewayPoolCardContent = ({
  logo,
  title,
  rewardsInUst,
  rewardDenominator,
  totalDepositAmount,
  rewards,
  totalClaimedAmount,
  totalClaimedAmountInUst,
  startedAt,
  rewardsClaimableAt,
  poolEndsAt,
  loading,
  error
}) => {
  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Box display="flex" alignItems="center">
        <AvatarWrapper>
          <img src={logo} alt={title} />
        </AvatarWrapper>
        <Typography
          sx={{
            ml: 1.5,
            fontWeight: 'normal'
          }}
          variant="h3"
          component="h3"
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ mt: 1.5 }}>
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={0}
        >
          <Box py={1}>
            <Typography variant="subtitle2">{'Deposits'}</Typography>
            <Typography variant="h3">
              {numeral(totalDepositAmount).format('0,000.[00]')} UST
            </Typography>
            <Typography variant="subtitle1">
              {numeral(totalDepositAmount).format('$0,000.[0000]')}
            </Typography>
          </Box>

          <Box py={1}>
            <Typography variant="subtitle2">{'Pending rewards'}</Typography>
            {!loading && error ? (
              <Typography variant="h3" color="error">
                {error}
              </Typography>
            ) : (
              <>
                <Typography variant="h3">
                  {loading ? (
                    <Skeleton />
                  ) : (
                    `${amountFormatter(rewards)} ${rewardDenominator}`
                  )}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ display: 'inline-block' }}
                >
                  {loading ? (
                    <Skeleton />
                  ) : (
                    numeral(rewardsInUst).format('$0,000.[0000]')
                  )}
                </Typography>
              </>
            )}
          </Box>

          <Box py={1}>
            <Typography variant="subtitle2">{'Claimed rewards'}</Typography>
            <Typography variant="h3">
              {`${amountFormatter(totalClaimedAmount)} ${rewardDenominator}`}
            </Typography>
            <Typography variant="subtitle1">
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
    </Box>
  );
};

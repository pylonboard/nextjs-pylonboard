import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { gql, useLazyQuery } from '@apollo/client';
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import { useEffect, useState } from 'react';
import { poolsByIdentifier } from '@/content/DashboardPages/gateway-pools/pools';
import Error from '@/components/Error';
import WalletConnect from '@/components/WalletConnect';
import { GatewayPoolCard } from '@/content/Dashboards/MyGatewayPools/GatewayPoolCard';
import { GatewayPoolsSortBy } from '@/enums/gatewayPools';

const sortByDate = (a, b, field) => {
  return new Date(b[field]).valueOf() - new Date(a[field]).valueOf()
}

const sortByName = (a, b, field) => {
  return b[field] - a[field]
}

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
      rewardUAmountDivisor
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

function MyGatewayPools({ sortBy }) {
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
      if (sortBy === GatewayPoolsSortBy['ALPHABETICAL']) {
        setMyGatewayPools([...data.myGatewayPools].sort(
          (a, b) => sortByName(a, b, 'friendlyName')
        ));
      } else if (sortBy === GatewayPoolsSortBy['CLAIM_AT']) {
        setMyGatewayPools([...data.myGatewayPools].sort(
          (a, b) => sortByDate(a, b, 'claimAt')
        ));
      }
    }
  }, [data, sortBy]);

  return (
    <Grid container spacing={4}>
      {error ? (
        <Grid item xs={12}>
          <Error message={error.message} />
        </Grid>
      ) : loading ? (
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={300} />
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
            rewardUAmountDivisor,
            startedAt,
            claimAt,
            withdrawAt
          }) => (
            <Grid key={friendlyName} item xs={12} sm={6} md={4} xl={3}>
              <GatewayPoolCard
                walletAddress={myWalletAddress}
                poolContractId={poolContractAddress}
                title={poolsByIdentifier[poolIdentifier].title}
                logo={poolsByIdentifier[poolIdentifier].logo}
                rewardDenominator={rewardDenominator}
                rewardUAmountDivisor={rewardUAmountDivisor}
                rewardsUrl={getRewardsUrl({
                  poolContractAddress,
                  walletAddress: myWalletAddress
                })}
                totalDepositAmount={
                  totalDepositAmount - Math.abs(totalWithdrawnAmount)
                }
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
        <Grid item xs={12} alignItems="center">
          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <Box>
              <Typography
                sx={{
                  mb: 1.5,
                  fontWeight: 'normal'
                }}
                variant="h4"
                component="p"
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
                variant="h3"
                component="p"
              >
                No Gateway Pools found
              </Typography>
            </Box>
          )}
        </Grid>
      )}
    </Grid>
  );
}

export default MyGatewayPools;

import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { gql, useLazyQuery } from '@apollo/client';
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import { useEffect, useState } from 'react';
import { poolsByIdentifier } from '@/content/DashboardPages/gateway-pools/pools';
import Error from '@/components/Error';
import WalletConnect from '@/components/WalletConnect';
import { AirdropCard } from '@/content/Dashboards/MyAirdrops/AirdropCard';

const QUERY = gql`
    query MyAirdrops($terraWallet: String!) {
        myRewards(terraWallet: $terraWallet, rewardType: AIRDROP) {
            rewards {
                rewardType
                denominator
                amount
                amountInUstAtClaim
            }
        }
    }
`;

function MyAirdropsList({ sortBy }) {
  const [myWalletAddress, setMyWalletAddress] = useState(null);
  const [myAirdrops, setMyAirdrops] = useState([]);
  const { wallets, status } = useWallet();
  const [getMyAirdrops, { data, loading, error }] = useLazyQuery(QUERY);

  useEffect(() => {
    status === WalletStatus.WALLET_CONNECTED &&
    setMyWalletAddress(wallets[0].terraAddress);
  }, [status]);

  useEffect(() => {
    myWalletAddress &&
    getMyAirdrops({
      variables: {
        terraWallet: myWalletAddress
      }
    });
  }, [myWalletAddress]);

  useEffect(() => {
    if (data && data.myRewards?.rewards?.length) {
      setMyAirdrops(
        [...data.myRewards.rewards]
      );
    }
  }, [data, sortBy]);

  if (error) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Error message={error.message} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={4}>
      {loading
        ? Array.from(Array(8), Math.random).map((value) => (
          <Grid key={value} item xs={12} sm={6} md={4} xl={3}>
            <Skeleton variant='rectangular' height={516} />
          </Grid>
        ))
        : myAirdrops.map(
          ({
             rewardType,
             denominator,
             amount,
             amountInUstAtClaim,
             ...rest
           }) => {
            return (
              <Grid key={denominator} item xs={12} sm={6} md={4} xl={3}>
                <AirdropCard
                  header={{
                    title: denominator
                    // logo: poolsByIdentifier[denominator].logo
                  }}
                  walletAddress={myWalletAddress}
                  // poolContractId={poolContractAddress}
                  {...rest}
                />
              </Grid>
            );
          }
        )}
      <Grid item xs={12} alignItems='center'>
        {!loading && status === WalletStatus.WALLET_NOT_CONNECTED && (
          <Box>
            <Typography
              sx={{
                mb: 1.5,
                fontWeight: 'normal'
              }}
              variant='h4'
              component='p'
            >
              Connect your wallet to see your airdrops
            </Typography>
            <WalletConnect />
          </Box>
        )}
        {!loading &&
          myAirdrops.length === 0 &&
          status === WalletStatus.WALLET_CONNECTED && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  marginY: 1.5,
                  fontWeight: 'normal'
                }}
                variant='h3'
                component='p'
              >
                No claimed Airdrops found
              </Typography>
            </Box>
          )}
      </Grid>
    </Grid>
  );
}

export default MyAirdropsList;

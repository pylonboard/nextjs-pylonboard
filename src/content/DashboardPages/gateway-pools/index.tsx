import { Grid, Box, styled, Tab, Tabs } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import { useRouter } from 'next/router'
import { gql, useLazyQuery } from '@apollo/client';
import { SyntheticEvent, useEffect } from 'react';
import DepositOverTime from '@/content/Dashboards/GatewayPools/DepositOverTime';
import DepositMetrics from '@/content/Dashboards/GatewayPools/DepositMetrics';
import WalletShares from '@/content/Dashboards/GatewayPools/WalletShares';
import MineStakingStatsTable from '@/content/Dashboards/GatewayPools/MineStakingStatsTable';
import MineStakingRankings from '@/content/Dashboards/GatewayPools/MineStakingRankings';

import pools from '@/content/DashboardPages/gateway-pools/pools';

const TabsWrapper = styled(Tabs)`
  .MuiTabs-scrollableX {
    overflow-x: auto !important;
  }

  .MuiTabs-indicator {
    box-shadow: none;
  }
`;

const QUERY = gql`
    query GatewayPoolStats($gatewayIdentifier: GatewayPoolIdentifier!) {
        gatewayPoolStats(gatewayIdentifier: $gatewayIdentifier) {
            overall {
                depositPerWallet {
                    amount
                    wallet
                    inPercent
                }
                depositsOverTime {
                    value
                    at
                }
                maxDeposit
                minDeposit
                averageDeposit
                totalValueLocked   
            }
        }
    }
`;

const getPoolByValue = value => pools.find(pool => pool.value === value)

function DashboardGatewayPoolsContent() {
  const router = useRouter();
  const gwp = router.query.gwp as string;

  useEffect(() => {
    if (router.isReady && (!router.query.gwp || !getPoolByValue(router.query.gwp))) {
      router.push({
        pathname: router.pathname,
        query: { gwp: pools[0].value },
      }, undefined, { shallow: true })
    }

  }, [router.isReady]);


  const [getGatewayPool, { data, loading, called, error }] = useLazyQuery(QUERY);

  useEffect(() => {
    if (getPoolByValue(gwp)) {
      getGatewayPool({
        variables: {
          gatewayIdentifier: gwp
        }
      })
    }
  }, [router.query.gwp])


  const handleTabsChange = (_event: SyntheticEvent, tabsValue: string) => {
    router.push({
      pathname: router.pathname,
      query: { gwp: tabsValue },
    }, undefined, { shallow: true })
  }

  const poolExists = getPoolByValue(gwp);

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon Gateway Pools"
          subtitle={`Pylon Gateway Pools insights - deposit sizes, MINE staking vs deposits.${poolExists ? ' Currently showing data for the ' + poolExists.text + ' pool' : ''}`}
        />
      </PageTitleWrapper>

      {poolExists ? (
        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="primary"
          value={gwp}
          variant="scrollable"
        >
          {pools.map((pool) => (
            <Tab
              key={pool.value}
              value={pool.value}
              label={pool.text}
              disableRipple
            />
          ))}
        </TabsWrapper>
      ) : (
        <Box display="flex" height={38} sx={{ overflowX : "auto" }}>
          {pools.map((pool) => (
            <Tab
              disabled
              key={pool.value}
              value={pool.value}
              label={pool.text}
              disableRipple
            />
          ))}
        </Box>
      )}

      <Grid
        sx={{ px: 4, mt: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <DepositMetrics
            data={data && data.gatewayPoolStats.overall}
            loading={!called || loading}
            error={error}
          />
        </Grid>
        <Grid item xs={12}>
          <WalletShares
            data={data && data.gatewayPoolStats.overall.depositPerWallet}
            loading={!called || loading}
            error={error}
          />
        </Grid>
        <Grid item xs={12}>
          <DepositOverTime
            data={data && data.gatewayPoolStats.overall.depositsOverTime}
            loading={!called || loading}
            error={error}
          />
        </Grid>
        <Grid item xs={12}>
          {poolExists && <MineStakingStatsTable gatewayIdentifier={gwp} />}
        </Grid>
        <Grid item xs={12}>
          {poolExists && <MineStakingRankings gatewayIdentifier={gwp} />}
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardGatewayPoolsContent;

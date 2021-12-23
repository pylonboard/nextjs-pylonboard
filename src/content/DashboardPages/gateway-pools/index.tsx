import { Grid, styled, Tab, Tabs } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import { gql, useQuery } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import DepositOverTime from '@/content/Dashboards/GatewayPools/DepositOverTime';
import DepositMetrics from '@/content/Dashboards/GatewayPools/DepositMetrics';
import WalletShares from '@/content/Dashboards/GatewayPools/WalletShares';
import MineStakingStatsTable from '@/content/Dashboards/GatewayPools/MineStakingStatsTable';
import MineStakingRankings from '@/content/Dashboards/GatewayPools/MineStakingRankings';

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          box-shadow: none;
      }
    }
    `
);

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

interface Pool {
  value: string;
  text: string;
}

const pools: Pool[] = [
  {
    value: 'SAYVE',
    text: 'Sayve'
  },
  {
    value: 'GLOW',
    text: 'Glow'
  },
  {
    value: 'NEXUS',
    text: 'Nexus'
  },
  {
    value: 'WHITE_WHALE',
    text: 'White Whale'
  },
  {
    value: 'ORION',
    text: 'Orion'
  },
  {
    value: 'VALKYRIE',
    text: 'Valrkyrie'
  },
  {
    value: 'TERRA_WORLD',
    text: 'Terra World'
  },
  {
    value: 'LOOP',
    text: 'Loop'
  },
  {
    value: 'MINE',
    text: 'MINE'
  },
];

function DashboardGatewayPoolsContent() {
  const [activeTab, setActiveTab] = useState<string>(pools[0].value);
  const { data, loading, refetch } = useQuery(QUERY, {
    variables: {
      gatewayIdentifier: pools[0].value
    }});

  const handleTabsChange = (_event: SyntheticEvent, tabsValue: string) => {
    setActiveTab(tabsValue);
    refetch({ gatewayIdentifier: tabsValue })
  }

  const getActivePool = (value: string) =>
    pools.find(pool => pool.value === value)

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon Gateway Pools"
          subtitle={`These are the Pylon Gateway Pools for ${getActivePool(activeTab).text}`}
        />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <TabsWrapper
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="primary"
            value={activeTab}
            variant="scrollable"
          >
            {pools.map((pool) => (
              <Tab key={pool.value} value={pool.value} label={pool.text} disableRipple />
            ))}
          </TabsWrapper>
        </Grid>
        <Grid item xs={12}>
          <DepositMetrics data={data && data.gatewayPoolStats.overall} loading={loading} />
        </Grid>
        <Grid item xs={12}>
          <WalletShares
            data={data && data.gatewayPoolStats.overall.depositPerWallet}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <DepositOverTime
            data={data && data.gatewayPoolStats.overall.depositsOverTime}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <MineStakingStatsTable gatewayIdentifier={activeTab} />
        </Grid>
        <Grid item xs={12}>
          <MineStakingRankings gatewayIdentifier={activeTab} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardGatewayPoolsContent;

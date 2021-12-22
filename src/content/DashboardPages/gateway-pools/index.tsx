import { Button, Grid, Menu, MenuItem } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import { gql, useQuery } from '@apollo/client';
import Loader from '@/components/Loader';
import { useRef, useState } from 'react';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import DepositOverTime from '@/content/Dashboards/GatewayPools/DepositOverTime';
import DepositMetrics from '@/content/Dashboards/GatewayPools/DepositMetrics';
import WalletShares from '@/content/Dashboards/GatewayPools/WalletShares';
import MineStakingStatsTable from '@/content/Dashboards/GatewayPools/MineStakingStatsTable';
import MineStakingRankings from '@/content/Dashboards/GatewayPools/MineStakingRankings';

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
    value: 'WHITE_WHALE',
    text: 'White Whale'
  },
  {
    value: 'LOOP',
    text: 'Loop'
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
    value: 'MINE',
    text: 'MINE'
  },
  {
    value: 'NEXUS',
    text: 'Nexus'
  }
];

function DashboardGatewayPoolsContent() {
  const { data, loading, refetch } = useQuery(QUERY, {
    variables: {
      gatewayIdentifier: pools[0].value
    }});

  const actionRef1 = useRef<any>(null);
  const [openPool, setOpenMenuPool] = useState<boolean>(false);
  const [pool, setPool] = useState<Pool>(pools[0]);

  const handlePoolChange = (pool: Pool) => {
    setPool(pool);
    setOpenMenuPool(false);
    refetch({ gatewayIdentifier: pool.value })
  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon Gateway Pools"
          subtitle="These are the Pylon Gateway Pools"
          action={
            <>
              <Button
                variant="outlined"
                ref={actionRef1}
                onClick={() => setOpenMenuPool(true)}
                endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
              >
                {pool.text}
              </Button>
              <Menu
                disableScrollLock
                anchorEl={actionRef1.current}
                onClose={() => setOpenMenuPool(false)}
                open={openPool}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                {pools.map((pool) => (
                  <MenuItem
                    key={pool.value}
                    onClick={() => handlePoolChange(pool)}
                  >
                    {pool.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          }
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
          <DepositMetrics data={data.gatewayPoolStats.overall} />
        </Grid>
        <Grid item xs={12}>
          <WalletShares data={data.gatewayPoolStats.overall.depositPerWallet} />
        </Grid>
        <Grid item xs={12}>
          <DepositOverTime data={data.gatewayPoolStats.overall.depositsOverTime} />
        </Grid>
        <Grid item xs={12}>
          <MineStakingStatsTable gatewayIdentifier={pool.value} />
        </Grid>
        <Grid item xs={12}>
          <MineStakingRankings gatewayIdentifier={pool.value} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardGatewayPoolsContent;

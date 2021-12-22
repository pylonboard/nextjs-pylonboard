import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TotalMineStakedPerDay from '@/content/Dashboards/Staking/TotalMineStakedPerDay';
import PageHeader from '@/components/PageHeader';
import { gql, useQuery } from '@apollo/client';
import NewStakersPerDay from '@/content/Dashboards/Staking/NewStakersPerDay';
import TotalMineStakedCumulative from '@/content/Dashboards/Staking/TotalMineStakedCumulative';
import ContinuousDaysWalletsStaked from '@/content/Dashboards/Staking/ContinuousDaysWalletsStaked';

const QUERY = gql`
    query MineStakingStats {
        mineStakingStats {
            stakedPerDay {
                at
                value
            }
            stakedPerDayCumulative {
                at
                value
            }
            daysStakedBinned {
                daysStakedBin
                count
            }
            newWalletsPerDay {
                at
                value
            }
        }
    }
`;

function DashboardStakingContent() {
  const { data, loading } = useQuery(QUERY);

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon MINE Staking"
          subtitle="These are the MINE staking statistics until now"
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
          <TotalMineStakedPerDay
            data={data && data.mineStakingStats.stakedPerDay}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <TotalMineStakedCumulative
            data={data && data.mineStakingStats.stakedPerDayCumulative}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <ContinuousDaysWalletsStaked
            data={data && data.mineStakingStats.daysStakedBinned}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <NewStakersPerDay
            data={data && data.mineStakingStats.newWalletsPerDay}
            loading={loading}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardStakingContent;

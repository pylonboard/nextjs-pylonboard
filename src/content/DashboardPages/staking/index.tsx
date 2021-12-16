import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TotalMineStakedPerDay from '@/content/Dashboards/Staking/TotalMineStakedPerDay';
import PageHeader from '@/components/PageHeader';
import { gql, useQuery } from '@apollo/client';
import NewStakersPerDay from '@/content/Dashboards/Staking/NewStakersPerDay';
import TotalMineStakedCumulative from '@/content/Dashboards/Staking/TotalMineStakedCumulative';
import ContinuousDaysWalletsStaked from '@/content/Dashboards/Staking/ContinuousDaysWalletsStaked';
import Loader from '@/components/Loader';

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

  if (loading) {
    return <Loader />
  }

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
          <TotalMineStakedPerDay data={data.mineStakingStats.stakedPerDay} />
        </Grid>
        <Grid item xs={12}>
          <TotalMineStakedCumulative data={data.mineStakingStats.stakedPerDayCumulative} />
        </Grid>
        <Grid item xs={12}>
          <ContinuousDaysWalletsStaked data={data.mineStakingStats.daysStakedBinned} />
        </Grid>
        <Grid item xs={12}>
          <NewStakersPerDay data={data.mineStakingStats.newWalletsPerDay} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardStakingContent;

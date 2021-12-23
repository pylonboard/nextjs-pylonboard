import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import { gql, useQuery } from '@apollo/client';
import MetricsTable from '@/content/Dashboards/Metrics/MetricsTable';

const QUERY = gql`
    query MineRankings {
        mineRankings {
            percentile99 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            percentile95 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            percentile90 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            percentile75 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            floor {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
        }
    }
`;

function DashboardMetricsContent() {
  const { data, loading } = useQuery(QUERY);

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon Mine Metrics"
          subtitle="These are the Pylon Mine Percentile Rankings"
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
          <MetricsTable data={data && data.mineRankings} loading={loading} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardMetricsContent;

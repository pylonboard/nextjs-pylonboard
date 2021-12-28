import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from '@/components/PageHeader';
import MetricsTable from '@/content/Dashboards/Metrics/MetricsTable';

function DashboardMetricsContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon MINE Staking percentiles"
          subtitle="The page shows percentile floors for wallets staking MINE. The 99 percentile contains the top 1% stakers."
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
          <MetricsTable />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardMetricsContent;

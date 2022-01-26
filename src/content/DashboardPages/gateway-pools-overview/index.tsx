import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import GatewayPoolStats from '@/content/Dashboards/GatewayPoolsOverview/GatewayPoolStats';



function DashboardGatewayPoolsOverviewContent() {

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon Gateway Pools"
          subtitle={'bla'}
        />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4, mt: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <GatewayPoolStats />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardGatewayPoolsOverviewContent;

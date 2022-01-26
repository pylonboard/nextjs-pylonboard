import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from '@/components/PageHeader';
import MyGatewayPools from '@/content/Dashboards/MyGatewayPools';

function DashboardMyGatewayPoolsContent() {

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="My Gateway Pools"
          subtitle={'Connect your wallet to see details on your Pylon Gateway Pools deposits and rewards.'}
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
          <MyGatewayPools />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardMyGatewayPoolsContent;

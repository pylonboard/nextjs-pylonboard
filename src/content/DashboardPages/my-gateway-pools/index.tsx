import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from '@/components/PageHeader';
import MyGatewayPools from '@/content/Dashboards/MyGatewayPools';
import { useState } from 'react';
import { GatewayPoolsSortBy } from '@/enums/gatewayPools';
import GatewayPoolSorting from '@/content/Dashboards/MyGatewayPools/GatewayPoolSorting';

function DashboardMyGatewayPoolsContent() {
  const [sortBy, setSortBy] = useState<string>(GatewayPoolsSortBy['ALPHABETICAL']);

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="My Gateway Pools"
          subtitle={
            'Connect your wallet to see details on your Pylon Gateway Pools deposits and rewards.'
          }
          action={
            <GatewayPoolSorting
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
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
          <MyGatewayPools sortBy={sortBy} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardMyGatewayPoolsContent;


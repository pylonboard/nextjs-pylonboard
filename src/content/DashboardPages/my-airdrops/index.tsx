import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from '@/components/PageHeader';

import { useState } from 'react';
import { GatewayPoolsSortBy } from '@/enums/gatewayPools';
import GatewayPoolSorting from '@/content/Dashboards/MyGatewayPools/GatewayPoolSorting';
import MyAirdropsList from '@/content/Dashboards/MyAirdrops/MyAirdropsList';

function DashboardMyAirdropsContent() {
  const [sortBy, setSortBy] = useState<string>(GatewayPoolsSortBy['ALPHABETICAL']);

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="My Airdrops"
          subtitle={
            'Connect your wallet to see details on your Pylon Airdrops'
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
          <MyAirdropsList sortBy={sortBy} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardMyAirdropsContent;


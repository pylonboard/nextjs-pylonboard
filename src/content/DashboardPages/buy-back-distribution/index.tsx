import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import WalletDistribution from '@/content/Dashboards/BuyBackDistribution/WalletDistribution';

function DashboardBuyBackDistributionContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon MINE Buyback Distribution"
          subtitle="These are the Buyback Distributions"
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
          <WalletDistribution />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardBuyBackDistributionContent;

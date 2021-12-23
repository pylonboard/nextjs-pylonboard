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
          subtitle="Treasury MINE buybacks. Search for your wallet and see a list of estimated buyback amounts added to your wallet."
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

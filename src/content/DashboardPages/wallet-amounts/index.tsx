import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import WalletAmountsTable from '@/content/Dashboards/WalletAmounts/WalletAmountsTable';



function DashboardWalletAmountsContent() {


  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon MINE Wallet Amounts"
          subtitle="These are the Pylon MINE Wallet Amounts"
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
          <WalletAmountsTable />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardWalletAmountsContent;

import { Grid } from '@mui/material';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

import PageHeader from '@/components/PageHeader';
import WalletAmountsTable from '@/content/Dashboards/WalletAmounts/WalletAmountsTable';



function DashboardWalletAmountsContent() {


  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Pylon MINE Wallet stake amounts"
          subtitle="Wallet MINE staking amounts sorted to show the biggest wallets first"
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

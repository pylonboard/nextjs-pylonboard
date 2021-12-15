import PageHeader from 'src/content/Dashboards/Commerce/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import VisitorsOverview from 'src/content/Dashboards/Commerce/VisitorsOverview';
import SalesByCategory from 'src/content/Dashboards/Commerce/SalesByCategory';
import MonthlyComparison from 'src/content/Dashboards/Commerce/MonthlyComparison';
import MonthlyGoals from 'src/content/Dashboards/Commerce/MonthlyGoals';
import SalesByCountry from 'src/content/Dashboards/Commerce/SalesByCountry';
import Traffic from 'src/content/Dashboards/Commerce/Traffic';

function DashboardCommerceContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
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
          <SalesByCategory />
        </Grid>

        <Grid item xs={12}>
          <VisitorsOverview />
        </Grid>

        <Grid item md={6} lg={7} xs={12}>
          <MonthlyComparison />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <MonthlyGoals />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <SalesByCountry />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <Traffic />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardCommerceContent;

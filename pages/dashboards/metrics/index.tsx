import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardMineMetricsContent from 'src/content/DashboardPages/metrics';

function DashboardMetrics() {
  return (
    <>
      <Head>
        <title>MINE Staking Percentiles</title>
      </Head>
      <DashboardMineMetricsContent />
    </>
  );
}

DashboardMetrics.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardMetrics;

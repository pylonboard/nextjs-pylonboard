import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';


import DashboardStatisticsContent from 'src/content/DashboardPages/statistics';

function DashboardStatistics() {
  return (
    <>
      <Head>
        <title>Statistics Dashboard</title>
      </Head>
      <DashboardStatisticsContent />
    </>
  );
}

DashboardStatistics.getLayout = (page) => (
  
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  
);

export default DashboardStatistics;

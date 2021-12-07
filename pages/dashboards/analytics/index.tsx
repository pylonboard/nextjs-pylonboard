import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardAnalyticsContent from 'src/content/DashboardPages/analytics';

function DashboardAnalytics() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      <DashboardAnalyticsContent />
    </>
  );
}

DashboardAnalytics.getLayout = (page) => (
  
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  
);

export default DashboardAnalytics;

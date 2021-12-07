import Head from 'next/head';


import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

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
  
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  
);

export default DashboardAnalytics;

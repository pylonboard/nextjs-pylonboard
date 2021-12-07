import Head from 'next/head';


import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';

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

    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>

);

export default DashboardAnalytics;

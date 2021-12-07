import Head from 'next/head';


import TopNavigationLayout from 'src/layouts/TopNavigationLayout';

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


    <TopNavigationLayout>{page}</TopNavigationLayout>
  
);

export default DashboardAnalytics;

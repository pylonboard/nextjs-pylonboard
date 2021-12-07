import Head from 'next/head';


import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';

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
  
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  
);

export default DashboardAnalytics;

import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
  <AccentHeaderLayout>{page}</AccentHeaderLayout>
);

export default DashboardAnalytics;

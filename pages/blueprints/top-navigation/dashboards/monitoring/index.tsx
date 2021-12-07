import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';


import DashboardMonitoringContent from 'src/content/DashboardPages/monitoring';

function DashboardMonitoring() {
  return (
    <>
      <Head>
        <title>Monitoring Dashboard</title>
      </Head>
      <DashboardMonitoringContent />
    </>
  );
}

DashboardMonitoring.getLayout = (page) => (
  
    <TopNavigationLayout>{page}</TopNavigationLayout>
  
);

export default DashboardMonitoring;

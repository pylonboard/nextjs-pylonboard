import Head from 'next/head';


import TopNavigationLayout from 'src/layouts/TopNavigationLayout';

import DashboardAutomationContent from 'src/content/DashboardPages/automation';

function DashboardAutomation() {
  return (
    <>
      <Head>
        <title>Automation Dashboard</title>
      </Head>
      <DashboardAutomationContent />
    </>
  );
}

DashboardAutomation.getLayout = (page) => (

    <TopNavigationLayout>{page}</TopNavigationLayout>

);

export default DashboardAutomation;

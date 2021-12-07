import Head from 'next/head';


import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

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
  
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  
);

export default DashboardAutomation;

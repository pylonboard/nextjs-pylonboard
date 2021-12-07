import Head from 'next/head';


import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
  
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  
);

export default DashboardAutomation;

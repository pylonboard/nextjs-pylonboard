import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';


import DashboardHelpdeskContent from 'src/content/DashboardPages/helpdesk';

function DashboardHelpdesk() {
  return (
    <>
      <Head>
        <title>Helpdesk Dashboard</title>
      </Head>
      <DashboardHelpdeskContent />
    </>
  );
}

DashboardHelpdesk.getLayout = (page) => (

    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>

);

export default DashboardHelpdesk;

import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardGatewayPoolsOverviewContent from '@/content/DashboardPages/gateway-pools-overview';

function DashboardGatewayPoolsOverview() {
  return (
    <>
      <Head>
        <title>My Gateway Pools</title>
      </Head>
      <DashboardGatewayPoolsOverviewContent />
    </>
  );
}

DashboardGatewayPoolsOverview.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardGatewayPoolsOverview;

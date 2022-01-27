import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardMyGatewayPoolsContent from 'src/content/DashboardPages/my-gateway-pools';

function DashboardGatewayPools() {
  return (
    <>
      <Head>
        <title>My Gateway Pools</title>
  </Head>
  <DashboardMyGatewayPoolsContent />
  </>
);
}

DashboardGatewayPools.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardGatewayPools;

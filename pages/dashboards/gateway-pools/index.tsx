import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardGatewayPoolsContent from 'src/content/DashboardPages/gateway-pools';

function DashboardGatewayPools() {
  return (
    <>
      <Head>
        <title>Pylon Gateway Pools</title>
      </Head>
      <DashboardGatewayPoolsContent />
    </>
  );
}

DashboardGatewayPools.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardGatewayPools;

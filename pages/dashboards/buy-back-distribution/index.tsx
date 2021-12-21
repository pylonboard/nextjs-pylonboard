import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardBuyBackDistributionContent from '@/content/DashboardPages/buy-back-distribution';

function DashboardBuyBackDistribution() {
  return (
    <>
      <Head>
        <title>Pylon Gateway Pools</title>
      </Head>
      <DashboardBuyBackDistributionContent />
    </>
  );
}

DashboardBuyBackDistribution.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardBuyBackDistribution;

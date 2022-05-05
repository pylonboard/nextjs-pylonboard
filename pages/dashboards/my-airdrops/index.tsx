import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardMyAirdropsContent from '@/content/DashboardPages/my-airdrops';

function DashboardAirdrops() {
  return (
    <>
      <Head>
        <title>My Airdrops</title>
  </Head>
  <DashboardMyAirdropsContent />
  </>
);
}

DashboardAirdrops.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardAirdrops;

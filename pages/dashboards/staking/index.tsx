import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardMineStakingContent from 'src/content/DashboardPages/staking';

function DashboardStaking() {
  return (
    <>
      <Head>
        <title>MINE Staking Statistics</title>
      </Head>
      <DashboardMineStakingContent />
    </>
  );
}

DashboardStaking.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardStaking;

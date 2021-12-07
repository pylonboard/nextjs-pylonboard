import Head from 'next/head';


import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

import DashboardBankingContent from 'src/content/DashboardPages/banking';

function DashboardBanking() {
  return (
    <>
      <Head>
        <title>Banking Dashboard</title>
      </Head>
      <DashboardBankingContent />
    </>
  );
}

DashboardBanking.getLayout = (page) => (
  
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>

);

export default DashboardBanking;

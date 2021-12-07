import Head from 'next/head';


import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
  
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  
);

export default DashboardBanking;

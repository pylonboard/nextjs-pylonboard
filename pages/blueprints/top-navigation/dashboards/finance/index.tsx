import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';


import DashboardFinanceContent from 'src/content/DashboardPages/finance';

function DashboardFinance() {
  return (
    <>
      <Head>
        <title>Finance Dashboard</title>
      </Head>
      <DashboardFinanceContent />
    </>
  );
}

DashboardFinance.getLayout = (page) => (
  
    <TopNavigationLayout>{page}</TopNavigationLayout>
  
);

export default DashboardFinance;

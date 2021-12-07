import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';


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
  
    <AccentSidebarLayout>{page}</AccentSidebarLayout>

);

export default DashboardFinance;

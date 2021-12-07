import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';


import DashboardExpensesContent from 'src/content/DashboardPages/expenses';

function DashboardExpenses() {
  return (
    <>
      <Head>
        <title>Expenses Dashboard</title>
      </Head>
      <DashboardExpensesContent />
    </>
  );
}

DashboardExpenses.getLayout = (page) => (
  
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  
);

export default DashboardExpenses;

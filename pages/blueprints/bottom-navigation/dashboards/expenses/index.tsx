import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';


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
  
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  
);

export default DashboardExpenses;

import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardWalletAmountsContent from 'src/content/DashboardPages/wallet-amounts';

function DashboarWalletAmounts() {
  return (
    <>
      <Head>
        <title>Biggest Mine wallets</title>
      </Head>
      <DashboardWalletAmountsContent />
    </>
  );
}

DashboarWalletAmounts.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboarWalletAmounts;

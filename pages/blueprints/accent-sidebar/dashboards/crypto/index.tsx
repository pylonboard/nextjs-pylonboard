import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';


import DashboardCryptoContent from 'src/content/DashboardPages/crypto';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <DashboardCryptoContent />
    </>
  );
}

DashboardCrypto.getLayout = (page) => (
  
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  
);

export default DashboardCrypto;

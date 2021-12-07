import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';


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
  
    <TopNavigationLayout>{page}</TopNavigationLayout>
  
);

export default DashboardCrypto;

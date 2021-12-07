import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';


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
  
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  
);

export default DashboardCrypto;

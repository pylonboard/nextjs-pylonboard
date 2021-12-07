import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
  <AccentHeaderLayout>{page}</AccentHeaderLayout>
);

export default DashboardCrypto;

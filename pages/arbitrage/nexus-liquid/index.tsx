import Head from 'next/head';


import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

import NexusLiquidContent from '@/content/ArbitragePages/nexus-liquid';

function ArbNexusLiquid() {
  return (
    <>
      <Head>
        <title>Nexus liquid arb</title>
      </Head>
      <NexusLiquidContent />
    </>
  );
}

ArbNexusLiquid.getLayout = (page) => (

  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default ArbNexusLiquid;

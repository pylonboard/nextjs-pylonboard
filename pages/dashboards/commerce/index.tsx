import Head from 'next/head';
import ClientOnly from '@/components/ClientOnly';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardCommerceContent from 'src/content/DashboardPages/commerce';

function DashboardCommerce() {
  return (
    <>
      <Head>
        <title>Deposit Metrics</title>
      </Head>
      <ClientOnly>
        <DashboardCommerceContent />
      </ClientOnly>
    </>
  );
}

DashboardCommerce.getLayout = (page) => (

    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardCommerce;

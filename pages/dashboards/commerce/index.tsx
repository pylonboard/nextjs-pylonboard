import Head from 'next/head';


import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import DashboardCommerceContent from 'src/content/DashboardPages/commerce';

function DashboardCommerce() {
  return (
    <>
      <Head>
        <title>Commerce Dashboard</title>
      </Head>
      <DashboardCommerceContent />
    </>
  );
}

DashboardCommerce.getLayout = (page) => (

    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>

);

export default DashboardCommerce;

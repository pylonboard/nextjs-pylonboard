import Head from 'next/head';


import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

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
  
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  
);

export default DashboardCommerce;

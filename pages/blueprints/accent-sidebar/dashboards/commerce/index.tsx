import Head from 'next/head';


import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
  
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  
);

export default DashboardCommerce;

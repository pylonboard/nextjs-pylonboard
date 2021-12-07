import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';


import DashboardProductsContent from 'src/content/DashboardPages/products';

function DashboardProducts() {
  return (
    <>
      <Head>
        <title>Products Dashboard</title>
      </Head>
      <DashboardProductsContent />
    </>
  );
}

DashboardProducts.getLayout = (page) => (
  
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  
);

export default DashboardProducts;

import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';


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
  
    <TopNavigationLayout>{page}</TopNavigationLayout>
  
);

export default DashboardProducts;

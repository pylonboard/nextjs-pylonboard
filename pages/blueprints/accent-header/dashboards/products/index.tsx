import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
  <AccentHeaderLayout>{page}</AccentHeaderLayout>
);

export default DashboardProducts;

import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';


import DashboardLearningContent from 'src/content/DashboardPages/learning';

function DashboardLearning() {
  return (
    <>
      <Head>
        <title>Learning Dashboard</title>
      </Head>
      <DashboardLearningContent />
    </>
  );
}

DashboardLearning.getLayout = (page) => (
  
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  
);

export default DashboardLearning;

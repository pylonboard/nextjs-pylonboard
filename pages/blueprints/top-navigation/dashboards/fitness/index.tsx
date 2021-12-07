import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';


import DashboardFitnessContent from 'src/content/DashboardPages/fitness';

function DashboardFitness() {
  return (
    <>
      <Head>
        <title>Fitness Dashboard</title>
      </Head>
      <DashboardFitnessContent />
    </>
  );
}

DashboardFitness.getLayout = (page) => (
  
    <TopNavigationLayout>{page}</TopNavigationLayout>
  
);

export default DashboardFitness;

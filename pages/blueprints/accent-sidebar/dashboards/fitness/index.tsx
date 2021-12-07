import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';


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

    <AccentSidebarLayout>{page}</AccentSidebarLayout>

);

export default DashboardFitness;

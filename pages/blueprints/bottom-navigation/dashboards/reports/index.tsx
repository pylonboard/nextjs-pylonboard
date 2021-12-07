import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';


import DashboardReportsContent from 'src/content/DashboardPages/reports';

function DashboardReports() {
  return (
    <>
      <Head>
        <title>Reports Dashboard</title>
      </Head>
      <DashboardReportsContent />
    </>
  );
}

DashboardReports.getLayout = (page) => (

    <BottomNavigationLayout>{page}</BottomNavigationLayout>

);

export default DashboardReports;

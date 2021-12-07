import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';


import DashboardHospitalViewContent from 'src/content/DashboardPages/healthcare/hospital';

function DashboardHospitalView() {
  return (
    <>
      <Head>
        <title>Healthcare Dashboard - Hospital Management</title>
      </Head>
      <DashboardHospitalViewContent />
    </>
  );
}

DashboardHospitalView.getLayout = (page) => (
  
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  
);

export default DashboardHospitalView;

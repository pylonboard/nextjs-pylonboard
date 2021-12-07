import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

import DashboardTasksContent from 'src/content/DashboardPages/tasks';

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <DashboardTasksContent />
    </>
  );
}

DashboardTasks.getLayout = (page) => (
  <AccentHeaderLayout>{page}</AccentHeaderLayout>
);

export default DashboardTasks;

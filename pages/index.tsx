import { Box, Container, styled, Grid, Button } from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import Footer from 'src/components/Footer';
import Link from '@/components/Link';
import Highlights from '@/content/Overview/Highlights';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(5)};
`
);

const OverviewWrapper = styled(Box)`
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background: #232a2e;
`;

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Pylon Board</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Logo />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboards/my-gateway-pools"
                  variant="contained"
                >
                  {'Webapp'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Box flex={1}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Hero />
          </Grid>
          <Grid item xs={12}>
            <Highlights />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

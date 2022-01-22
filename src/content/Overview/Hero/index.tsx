import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';

import Link from 'src/components/Link';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const TypographyHeading = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const TypographySubHeading = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

function Hero() {

  return (
    <Container maxWidth="lg">
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={6} pr={{ xs: 0, md: 3 }}>
          <TypographyH1
            sx={{
              mb: 2
            }}
            variant="h1"
          >
            {'Pylon Board'}
          </TypographyH1>
          <TypographyH2
            sx={{
              lineHeight: 1.5,
              pb: 4
            }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {
              'Pylon Protocol related data, namely insights on MINE staking and wallet distributions in Gateway Pools.'
            }
          </TypographyH2>
          <Button
            component={Link}
            href="/dashboards/staking"
            size="large"
            variant="contained"
          >
            {'Explore'}
          </Button>
        </Grid>
        <Grid item md={6}>
          <Box>
            <TypographyHeading
              sx={{
                mb: 1
              }}
              variant="h3"
            >
              {'Dashboards'}
            </TypographyHeading>
            <TypographySubHeading
              sx={{
                maxWidth: 500,
                lineHeight: 1.5,
                mb: 3
              }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              {
                'Explore the Pylon Board dashboards'
              }
            </TypographySubHeading>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component={Link}
                  href="/dashboards/staking"
                  variant="outlined"
                  color="primary"
                >
                  {'Staking'}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component={Link}
                  href="/dashboards/metrics"
                  variant="outlined"
                  color="primary"
                >
                  {'Stake Percentiles'}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component={Link}
                  href="/dashboards/buy-back-distribution"
                  variant="outlined"
                  color="primary"
                >
                  {'Buyback Distribution'}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component={Link}
                  href="/dashboards/wallet-amounts"
                  variant="outlined"
                  color="primary"
                >
                  {'Biggest Mine Wallets'}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component={Link}
                  href="/dashboards/gateway-pools"
                  variant="outlined"
                  color="primary"
                >
                  {'Gateway Pools'}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component={Link}
                  href="/arbitrage/nexus-liquid"
                  variant="outlined"
                  color="primary"
                >
                  {'Arbitrage'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

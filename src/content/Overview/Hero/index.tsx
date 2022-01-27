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

const ImgWrapper = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 5;
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.general.borderRadiusLg};
        box-shadow: rgb(255 255 255 / 20%) 0px 0rem 14rem 0px, rgb(111 130 156 / 3%) 0px 0.8rem 2.3rem, rgb(17 29 57 / 15%) 0px 0.2rem 0.7rem;
    img {
      display: block;
      width: 100%;
    }
  `
);

const BoxAccent = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadiusLg};
    background: ${theme.palette.background.default};
    width: 100%;
    height: 100%;
    position: absolute;
    left: -40px;
    bottom: -40px;
    display: block;
    z-index: 4;
  `
);

const BoxContent = styled(Box)(
  () => `
  width: 150%;
  position: relative;
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
          <Box>
            <Button
              component={Link}
              href="/dashboards/my-gateway-pools"
              variant="contained"
            >
              {'Go to the Webapp'}
            </Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <BoxContent>
            <Link href="/dashboards/gateway-pools?gwp=MINE">
              <ImgWrapper>
                <img
                  alt="Tokyo"
                  src="/static/images/overview/hero-screenshot.jpg"
                />
              </ImgWrapper>
            </Link>
            <BoxAccent
              sx={{
                display: { xs: 'none', md: 'block' }
              }}
            />
          </BoxContent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

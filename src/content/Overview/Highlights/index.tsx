import Link from 'src/components/Link';
import {
  Box,
  Grid,
  Container,
  Card,
  Avatar,
  Typography,
  Button,
  styled
} from '@mui/material';

import pools, {
  poolsByIdentifier
} from '@/content/DashboardPages/gateway-pools/pools';
import { GatewayPoolCardContent } from '@/content/Dashboards/MyGatewayPools/GatewayPoolCard';
import { poolCardsHighlights } from '@/content/Overview/Highlights/data';

const BoxHighlights = styled(Box)(
  () => `
    position: relative;
    z-index: 5;
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

const TypographyFeature = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
    color: ${theme.colors.primary.main};
    font-weight: bold;
    margin-bottom: -${theme.spacing(1)};
    display: block;
`
);

const BoxLayouts = styled(Box)(
  ({ theme }) => `
      background: ${theme.colors.gradients.blue1};
      padding: ${theme.spacing(16, 0)};
      margin: ${theme.spacing(10, 0, 0)};
      position: relative;

      .typo-heading,
      .typo-feature {
        color: ${theme.colors.alpha.trueWhite[100]};
      }

      .typo-subheading {
        color: ${theme.colors.alpha.trueWhite[70]};
      }
`
);

const BoxLayoutsContent = styled(Container)(
  () => `
      z-index: 5;
      position: relative;
      color: #232a2e;
`
);

const BoxWave = styled(Box)(
  () => `
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    z-index: 5;

    svg path {
	    fill: #232a2e;
	}
`
);

const BoxWaveAlt = styled(Box)(
  () => `
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    z-index: 2;

    svg path {
	    fill: #232a2e;
	}
`
);

const LayoutImgButton = styled(Link)(
  ({ theme }) => `
    overflow: hidden;
    border-radius: ${theme.general.borderRadiusXl};
    display: block;
    position: relative;
    box-shadow: 0 0rem 14rem 0 rgb(0 0 0 / 20%), 0 0.8rem 2.3rem rgb(0 0 0 / 3%), 0 0.2rem 0.7rem rgb(0 0 0 / 15%);

    .MuiTypography-root {
      position: absolute;
      right: ${theme.spacing(3)};
      bottom: ${theme.spacing(3)};
      color: ${theme.colors.alpha.trueWhite[100]};;
      background: rgba(0,0,0,.8);
      padding: ${theme.spacing(2, 4.5)};
      border-radius: ${theme.general.borderRadiusXl};
      z-index: 5;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      opacity: 1;
      transition: opacity .2s;
    }

    &:hover {
      img {
        opacity: .8;
      }
    }
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[100]};
      width: ${theme.spacing(4.5)};
      height: ${theme.spacing(4.5)};
      margin-right: ${theme.spacing(1.5)};
      
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
`
);

function Highlights() {

  return (
    <BoxHighlights>
      <BoxLayouts>
        <BoxWave>
          <svg
            viewBox="0 0 1440 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1440V52.1874C1440 52.1874 873.5 172 720 172C566.5 172 0 52.1874 0 52.1874V0Z"
              fill="white"
            />
          </svg>
        </BoxWave>
        <BoxLayoutsContent maxWidth="lg">
          <Grid
            justifyContent="center"
            alignItems="center"
            spacing={6}
            container
          >
            <Grid item xs={12} md={6}>
              <TypographyFeature
                className="typo-feature"
                sx={{
                  mt: { lg: 10 }
                }}
              >
                4
              </TypographyFeature>
              <TypographyHeading
                className="typo-heading"
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                MINE Dashboards
              </TypographyHeading>
              <TypographySubHeading
                className="typo-subheading"
                sx={{
                  lineHeight: 1.5
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {
                  'MINE staking statistics - cumulative amounts, daily movements and wallet insights. Percentile floors, treasury buybacks and biggest staking amounts.'
                }
              </TypographySubHeading>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton href="/dashboards/staking">
                <Typography variant="h4">{'Staking'}</Typography>
                <img
                  src="/static/images/overview/dashboards_staking.jpg"
                  alt="Staking"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton href="/dashboards/metrics">
                <Typography variant="h4">{'Stake Percentiles'}</Typography>
                <img
                  src="/static/images/overview/dashboards_stake-percentiles.jpg"
                  alt="Stake Percentiles"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton href="/dashboards/buy-back-distribution">
                <Typography variant="h4">{'Buyback Distribution'}</Typography>
                <img
                  src="/static/images/overview/dashboards_buyback-distribution.jpg"
                  alt="Buyback distribution"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton href="/dashboards/wallet-amounts">
                <Typography variant="h4">{'Biggest Wallets'}</Typography>
                <img
                  src="/static/images/overview/dashboards_wallet-stake-amounts.jpg"
                  alt="Biggest MINE wallets"
                />
              </LayoutImgButton>
            </Grid>
          </Grid>
        </BoxLayoutsContent>
        <BoxWaveAlt>
          <svg
            viewBox="0 0 1440 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 172H0V119.813C0 119.813 566.5 0 720 0C873.5 0 1440 119.813 1440 119.813V172Z"
              fill="white"
            />
          </svg>
        </BoxWaveAlt>
      </BoxLayouts>
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 10 }
        }}
      >
        <Grid
          spacing={0}
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="center"
          container
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                top: { xs: -50, md: 0 },
                left: { xs: -150, md: -45 },
                minHeight: { xs: 530, md: 1130 },
                transform: { xs: 'scale(.5)', md: 'none' },
                position: 'relative'
              }}
            >
              <Button
                size="large"
                component={Link}
                href="/dashboards/my-gateway-pools"
                variant="contained"
                sx={{
                  position: 'absolute',
                  display: { xs: 'none', lg: 'block' },
                  right: { xs: 0, md: -80, lg: 50 },
                  bottom: 150
                }}
              >
                View your Pylon Gateway Pools
              </Button>
              {poolCardsHighlights.map(
                ({
                  id,
                  rewards,
                  rewardsInUst,
                  rewardDenominator,
                  top,
                  left,
                  animation,
                  totalDepositAmount,
                  totalClaimedAmount,
                  totalClaimedAmountInUst,
                  startedAt,
                  claimAt,
                  withdrawAt
                }) => {
                  const { title, logo } = poolsByIdentifier[id];
                  return (
                    <Box
                      key={id}
                      sx={{
                        position: 'absolute',
                        width: 345,
                        top,
                        left,
                        transform:
                          'translate(0px, 120px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <Box sx={{ animation }}>
                        <Card sx={{ backgroundColor: 'transparent' }}>
                          <GatewayPoolCardContent
                            title={title}
                            logo={logo}
                            rewardDenominator={rewardDenominator}
                            totalDepositAmount={totalDepositAmount}
                            totalClaimedAmount={totalClaimedAmount}
                            totalClaimedAmountInUst={totalClaimedAmountInUst}
                            startedAt={startedAt}
                            rewardsClaimableAt={claimAt}
                            poolEndsAt={withdrawAt}
                            rewardsInUst={rewardsInUst}
                            rewards={rewards}
                            loading={false}
                            error={null}
                          />
                        </Card>
                      </Box>
                    </Box>
                  );
                }
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <TypographyFeature>My</TypographyFeature>
              <TypographyHeading
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                {'Pylon Gateway Pools'}
              </TypographyHeading>
              <TypographySubHeading
                sx={{
                  lineHeight: 1.5,
                  pr: 8
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {
                  'Connect your wallet to see details on your Pylon Gateway Pools deposits and rewards.'
                }
              </TypographySubHeading>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            mt: 12,
            mb: 12
          }}
          spacing={4}
        >
          <Grid item md={6} lg={7}>
            <Box
              sx={{
                transform: { xs: 'scale(.9)', md: 'scale(.85)', lg: 'none' },
                left: { xs: '50px', md: '-180px', lg: '-45px' },
                minHeight: 600,
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -150,
                  left: -50,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(87deg) rotateY(330deg) rotateZ(285deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.1s 2.1s infinite alternate ease-in-out float'
                  }}
                >
                  <Card
                    sx={{
                      padding: '15px',
                      background: '#000'
                    }}
                  >
                    <img
                      width="582px"
                      height="344px"
                      src="/static/images/overview/gwp-1.jpg"
                      alt="Gateway pools 1"
                    />
                  </Card>
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 30,
                  left: 180,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(87deg) rotateY(330deg) rotateZ(285deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '1.5s 1s infinite alternate ease-in-out float'
                  }}
                >
                  <Card
                    sx={{
                      padding: '15px',
                      background: '#000'
                    }}
                  >
                    <img
                      width="582px"
                      height="344px"
                      src="/static/images/overview/gwp-3.jpg"
                      alt="Gateway pools 3"
                    />
                  </Card>
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 120,
                  left: -60,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(87deg) rotateY(330deg) rotateZ(285deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.8s 1.2s infinite alternate ease-in-out float'
                  }}
                >
                  <Card
                    sx={{
                      padding: '15px',
                      background: '#000'
                    }}
                  >
                    <img
                      width="582px"
                      height="344px"
                      src="/static/images/overview/gwp-2.jpg"
                      alt="Gateway pools 3"
                    />
                  </Card>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} lg={5}>
            <TypographyFeature>{pools.length}</TypographyFeature>
            <TypographyHeading
              sx={{
                mb: 1
              }}
              variant="h3"
            >
              Pylon Gateway Pools
            </TypographyHeading>
            <TypographySubHeading
              sx={{
                maxWidth: 500,
                lineHeight: 1.5,
                pr: 8,
                mb: 4
              }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              {
                'Pylon Gateway Pools insights - deposit sizes, MINE staking vs deposits.'
              }
            </TypographySubHeading>
            <Grid container spacing={2}>
              {pools.map(({ value, text, logo }) => (
                <Grid key={value} item xs={12} sm={6}>
                  <Button
                    component={Link}
                    href={`dashboards/gateway-pools?gwp=${value}`}
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <AvatarWrapper>
                        <img src={logo} alt={text} />
                      </AvatarWrapper>
                      {text}
                    </Box>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 12
          }}
          spacing={6}
        >
          <Grid item xs={12} md={6}>
            <TypographyFeature
              className="typo-feature"
              sx={{
                mt: { lg: 10 }
              }}
            >
              1
            </TypographyFeature>
            <TypographyHeading
              className="typo-heading"
              sx={{
                mb: 1
              }}
              variant="h3"
            >
              Arbitrage Dashboards
            </TypographyHeading>
            <TypographySubHeading
              className="typo-subheading"
              sx={{
                lineHeight: 1.5
              }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              {'Arbitrage opportunities for Liquid Pools.'}
            </TypographySubHeading>
          </Grid>
          <Grid item xs={12} md={6}>
            <LayoutImgButton href="/arbitrage/nexus-liquid">
              <Typography variant="h4">{'Nexus Liquid'}</Typography>
              <img
                src="/static/images/overview/arbitrage-nexus.jpg"
                alt="Nexus Liquid"
              />
            </LayoutImgButton>
          </Grid>
        </Grid>
      </Container>
    </BoxHighlights>
  );
}

export default Highlights;

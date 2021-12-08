import { Button, Card, Box, Grid, Typography } from '@mui/material';

import Label from 'src/components/Label';

function ActiveSubscriptions() {
  

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">{'Active Subscriptions'}</Typography>
        <Button size="small">{'View all subscriptions'}</Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  alt="Spotify"
                  src="/static/images/placeholders/logo/spotify.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Spotify
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="warning">
                  {'due in'}&nbsp;<b>17 {'days'}</b>
                </Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $32.00
              </Typography>
              <Button size="small" variant="outlined">
                {'Pay'}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  alt="Slack"
                  src="/static/images/placeholders/logo/slack.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Slack
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="success">{'just paid'}</Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $9.99
              </Typography>
              <Button size="small" variant="outlined" color="secondary">
                {'View'}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  height={28}
                  alt="Google"
                  src="/static/images/logo/google.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Google
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="error">
                  {'due in'}&nbsp;<b>3 {'days'}</b>
                </Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $8,695.00
              </Typography>
              <Button size="small" variant="outlined">
                {'Pay'}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  height={28}
                  alt="Airbnb"
                  src="/static/images/placeholders/logo/airbnb.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Airbnb
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="success">
                  {'due in'}&nbsp;<b>8 {'months'}</b>
                </Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $499.00
              </Typography>
              <Button size="small" variant="outlined">
                {'View'}
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ActiveSubscriptions;

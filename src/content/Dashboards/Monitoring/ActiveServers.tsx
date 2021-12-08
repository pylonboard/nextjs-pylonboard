import {
  Card,
  CardHeader,
  Grid,
  Divider,
  Alert,
  List,
  ListItem,
  Box,
  ListItemText,
  Typography,
  useTheme,
  styled
} from '@mui/material';

import Label from 'src/components/Label';
import Text from 'src/components/Text';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';

const ListItemWrapper = styled(ListItem)(
  ({ theme }) => `
        border-radius: 0;
        padding: ${theme.spacing(2)};
`
);

function ActiveServers() {
  
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 5]
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: theme.colors.error.dark,
      colors: [theme.colors.alpha.white[100]]
    },
    colors: [theme.colors.warning.light, theme.colors.error.light],
    fill: {
      opacity: 1
    },
    states: {
      normal: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        columnWidth: '28%'
      }
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      show: false,
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartData = [
    {
      name: 'Completed',
      type: 'column',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Cancelled',
      type: 'line',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    }
  ];

  return (
    <Card>
      <CardHeader title={'Active Servers'} />
      <Divider />
      <Grid container>
        <Grid item xs={12} md>
          <List disablePadding component="div">
            <ListItemWrapper>
              <ListItemText
                primary="Frankfurt"
                primaryTypographyProps={{ variant: 'h5' }}
                secondary="material-ui.com"
                secondaryTypographyProps={{ variant: 'subtitle1' }}
              />

              <Box
                sx={{
                  textAlign: 'right'
                }}
              >
                <Label color="success">{'active'}</Label>
                <Typography
                  align="right"
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{
                    pt: 0.5
                  }}
                >
                  {'Page Load'}:{' '}
                  <Text color="black">
                    <b>36ms</b>
                  </Text>
                </Typography>
              </Box>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
              <ListItemText
                primary="San Francisco"
                primaryTypographyProps={{ variant: 'h5' }}
                secondary="google.com"
                secondaryTypographyProps={{ variant: 'subtitle1' }}
              />

              <Box
                sx={{
                  textAlign: 'right'
                }}
              >
                <Label color="warning">{'provisioning'}</Label>
                <Typography
                  align="right"
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{
                    pt: 0.5
                  }}
                >
                  {'Page Load'}:{' '}
                  <Text color="black">
                    <b>255ms</b>
                  </Text>
                </Typography>
              </Box>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
              <ListItemText
                primary="Barcelona"
                primaryTypographyProps={{ variant: 'h5' }}
                secondary="example.xyz"
                secondaryTypographyProps={{ variant: 'subtitle1' }}
              />

              <Box
                sx={{
                  textAlign: 'right'
                }}
              >
                <Label color="error">{'high risk'}</Label>
                <Typography
                  align="right"
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{
                    pt: 0.5
                  }}
                >
                  {'Page Load'}:{' '}
                  <Text color="black">
                    <b>387ms</b>
                  </Text>
                </Typography>
              </Box>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
              <ListItemText
                primary="Toulouse"
                primaryTypographyProps={{ variant: 'h5' }}
                secondary="city.example"
                secondaryTypographyProps={{ variant: 'subtitle1' }}
              />

              <Box
                sx={{
                  textAlign: 'right'
                }}
              >
                <Label color="error">{'high risk'}</Label>
                <Typography
                  align="right"
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{
                    pt: 0.5
                  }}
                >
                  {'Page Load'}:{' '}
                  <Text color="black">
                    <b>456ms</b>
                  </Text>
                </Typography>
              </Box>
            </ListItemWrapper>
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} md>
          <Box
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Alert severity="warning">
              {'Too many servers have problems starting!'}
            </Alert>

            <Chart
              options={chartOptions}
              series={chartData}
              type="line"
              height={244}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ActiveServers;

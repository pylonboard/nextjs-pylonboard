import { Card, Box, useTheme, CardHeader, Divider, CardContent, Skeleton } from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';
import { amountFormatter } from '@/utils/numberFormatters';

function DepositOverTime({ data, loading }) {
  const theme = useTheme();

  const chartDepositOverTimeOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
        autoSelected: 'zoom'
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          }
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      borderColor: theme.colors.alpha.black[10]
    },
    legend: {
      show: false
    },
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 1,
      strokeWidth: 1,
      strokeOpacity: 1,
      strokeColors: [theme.colors.primary.main],
      colors: [theme.colors.alpha.white[100]]
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      type: "datetime",
      tickPlacement: "on",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: true
      },
      labels: {
        hideOverlappingLabels: true,
        style: {
          colors: theme.palette.text.secondary
        },
      },
      title: {
        text: 'time',
        offsetX: 0,
        offsetY: 5,
        style: {
          fontWeight: 300,
          fontFamily: 'inherit'
        }
      },
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        },
        formatter: value => amountFormatter(value)
      },
      title: {
        text: 'UST amount',
        offsetX: 0,
        offsetY: 0,
        style: {
          fontWeight: 300,
          fontFamily: 'inherit'
        }
      },
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardHeader title={'UST deposited over time'} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            p: 3
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" height={450} />
          ) : (
            <Chart
              options={{
                ...chartDepositOverTimeOptions,
                labels: data.map(d => d.at)
              }}
              series={[
                {
                  name: 'Amount',
                  data: data.map(d => d.value),
                }
              ]}
              type="bar"
              height={450}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DepositOverTime;

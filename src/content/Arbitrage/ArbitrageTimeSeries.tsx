import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Divider,
  useTheme, Skeleton
} from '@mui/material';

import { Chart } from '@/components/Chart';
import type { ApexOptions } from 'apexcharts';
import { amountFormatter } from '@/utils/numberFormatters';
import Error from '@/components/Error';

function ArbitrageTimeSeries({ data, loading, error, chartTitle, yAxisTitle, xAxisTitle }) {
  const theme = useTheme();

  const ChartAudienceOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    annotations: {
      yaxis: [
        {
          y: 0.95,
          y2: 0.75,
          borderColor: '#00E396',
          fillColor: '#00E396',
          label: {
            borderColor: '#333',
            style: {
              fontSize: '10px',
              color: '#333',
              background: '#00E396'
            },
            text: 'Buy'
          }
        },
        {
          y: 0.98,
          y2: 1.02,
          borderColor: '#FEB019',
          label: {
            borderColor: '#333',
            style: {
              color: '#fff',
              background: '#FEB019',
            },
            text: 'Sell'
          }
        },
      ]
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
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
    stroke: {
      curve: 'stepline',
      lineCap: 'butt',
      width: 1
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      type: 'datetime',
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
      },
      title: {
        text: xAxisTitle,
        offsetX: 0,
        offsetY: 5,
        style: {
          fontWeight: 300,
          fontFamily: 'inherit'
        }
      }
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
        text: yAxisTitle,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontWeight: 300,
          fontFamily: 'inherit'
        }
      }
    }
  };

  return (
    <Card>
      <CardHeader title={chartTitle} />
      <Divider />
      <CardContent>
        {!loading && error ? (
          <Error message={error.message} />
        ) : (
          <Box mt={2} height={420}>
            {loading ? (
              <Skeleton variant='rectangular' height='100%' />
            ) : (
              <Chart
                options={{
                  ...ChartAudienceOptions,
                  labels: data.map(d => d.at)
                }}
                series={[
                  {
                    name: 'value',
                    data: data.map(d => d.value)
                  }
                ]}
                type='line'
                height={420}
              />
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ArbitrageTimeSeries;

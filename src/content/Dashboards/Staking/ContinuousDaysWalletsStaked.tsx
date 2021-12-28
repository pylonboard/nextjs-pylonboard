import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Divider,
  useTheme, Skeleton
} from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';
import { amountFormatter } from '@/utils/numberFormatters';
import Error from '@/components/Error';

function TotalMineStakedCumulative({ data, loading, error }) {
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
    theme: {
      mode: theme.palette.mode
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
      },
      title: {
        text: 'continuous days',
        offsetX: 0,
        offsetY: 0,
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
        text: 'record count',
        offsetX: 2,
        offsetY: 0,
        style: {
          fontWeight: 300,
          fontFamily: 'inherit'
        }
      },
    }
  };

  return (
    <Card>
      <CardHeader title={'Days without unstaking'} />
      <Divider />
      <CardContent>
        {!loading && error ? (
          <Error message={error.message} />
        ) : (
          <Box mt={2} height={420}>
            {loading ? (
              <Skeleton variant="rectangular" height="100%" />
            ) : (
              <Chart
                options={{
                  ...ChartAudienceOptions,
                  labels: data.map(d => d.daysStakedBin)
                }}
                series={[
                  {
                    name: 'Record Count',
                    data: data.map(d => d.count),
                  }
                ]}
                type="bar"
                height={420}
              />
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default TotalMineStakedCumulative;

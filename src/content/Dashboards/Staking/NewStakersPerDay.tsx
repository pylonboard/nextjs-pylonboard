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

function NewStakersPerDay({ data, loading, error }) {
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
    stroke: {
      curve: 'smooth',
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
        text: 'days',
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
        text: 'new stakers',
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
    <Card>
      <CardHeader title={'Number of new stakers per day'} />
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
                  labels: data.map(d => d.at)
                }}
                series={[
                  {
                    name: 'Wallet',
                    data: data.map(d => d.value),
                  }
                ]}
                type="line"
                height={420}
              />
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default NewStakersPerDay;

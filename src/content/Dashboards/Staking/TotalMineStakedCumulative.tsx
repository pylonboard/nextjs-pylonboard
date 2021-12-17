import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Divider,
  useTheme
} from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';

function TotalMineStakedCumulative({ data }) {
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
        },
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
        formatter: value => new Intl.NumberFormat('default', {
          notation: "compact",
          compactDisplay: "short",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }).format(value)
      }
    }
  };

  return (
    <Card>
      <CardHeader title={'Total MINE staked (cumulative)'} />
      <Divider />
      <CardContent>
        <Box mt={2}>
          <Chart
            options={{
              ...ChartAudienceOptions,
              labels: data.map(d => d.at)
            }}
            series={[
              {
                name: 'Amount',
                data: data.map(d => d.value),
              }
            ]}
            type="line"
            height={420}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TotalMineStakedCumulative;

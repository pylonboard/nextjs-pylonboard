import { useQuery, gql } from '@apollo/client';

import { Card, Box, useTheme, CardHeader, Divider, CardContent } from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';

const QUERY = gql`
    query MineStakingStats {
        mineStakingStats {
            stakedPerDay {
                at
                value
            }
            stakedPerDayCumulative {
                at
                value
            }
        }
    }
`;

function VisitorsOverview() {
  const { data, loading, error } = useQuery(QUERY);

  if (!loading && !error) {
    console.log('data', data);
  }

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
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.error.main]
    },
    colors: [theme.colors.primary.main, theme.colors.error.main],
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: '20%'
      }
    },
    labels: [
      'Nov 22, 2021',
      'Nov 23, 2021',
      'Nov 24, 2021',
      'Nov 25, 2021',
      'Nov 26, 2021',
      'Nov 27, 2021',
      'Nov 28, 2021',
      'Nov 29, 2021',
      'Nov 30, 2021',
      'Dec 1, 2021',
      'Dec 2, 2021',
      'Dec 3, 2021',
      'Dec 4, 2021',
      'Dec 5, 2021',
      'Dec 6, 2021',
      'Dec 7, 2021',
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
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
      name: 'UST',
      type: 'column',
      data: [10120000, 1960000, 447410, 363820, 115100, 93460, 124640, 426290, 284600, 149980, 952260, 105830, 68170, 240640, 99170, 60630]
    }
  ];

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
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={450}
          />
        </Box>
      </CardContent>

    </Card>
  );
}

export default VisitorsOverview;

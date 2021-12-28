import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  Box,
  useTheme,
  styled,
  Skeleton
} from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';
import { percentileFormatter } from '@/utils/numberFormatters';
import { stringMiddleTruncate } from '@/utils/stringMiddleTruncate';
import Error from '@/components/Error';


const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
  `
);

const GridItem = styled(Grid)(
  ({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
  `
);

const PieChartSkeleton = styled(Skeleton)(
  ({ theme }) => `
    width: 260px;
    height: 260px;
    ${theme.breakpoints.up('md')} {
        width: 380px;
        height: 380px;
    }
  `
);

function WalletShares({ data, loading, error }) {
  const theme = useTheme();

  const colors = [
    theme.colors.primary.main,
    '#008FFB',
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0',
    '#A300D6',
    '#F86624',
    theme.colors.secondary.main
  ];

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md - 1,
        options: {
          chart: {
            width: 300,
            height: 300
          }
        }
      }
    ],
    plotOptions: {
      pie: {
        donut: {
          size: '55%'
        }
      }
    },
    colors,
    tooltip: {
      enabled: true,
      fillSeriesColor: true,
      style: {
        fontSize: '16px'
      },
      y: {
        title: {
          formatter: (seriesName: string) =>
            stringMiddleTruncate(seriesName, 16)
        },
        formatter: (value: number) => percentileFormatter(value / 100)
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (value: number) => percentileFormatter(value / 100),
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    stroke: {
      width: 1
    }
  };

  return (
    <Card>
      <CardHeader title={'Wallet %-share of total UST deposited'} />
      <Divider />
      <CardContent>
        {!loading && error ? (
          <Error message={error.message} />
        ) : (
          <Grid container spacing={3}>
            <GridItem
              sm={6}
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {loading ? (
                <PieChartSkeleton variant="circular" />
              ) : (
                <Chart
                  width={400}
                  height={400}
                  options={{
                    ...chartOptions,
                    labels: data.map(({ wallet }) => wallet)
                  }}
                  series={data.map(({ inPercent }) => inPercent)}
                  type="donut"
                />
              )}
            </GridItem>
            <GridItem
              sm={6}
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box sx={{ width: '100%' }}>
                {loading
                  ? Array.from(Array(9), Math.random).map((value) => (
                      <Skeleton key={value} sx={{ py: 0.8, fontSize: 10 }} />
                    ))
                  : data.map(({ wallet }, i: number) => (
                      <Typography
                        key={wallet}
                        variant="body2"
                        noWrap
                        sx={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          py: 0.6
                        }}
                      >
                        <DotLegend
                          style={{
                            marginRight: theme.spacing(1),
                            background: colors[i]
                          }}
                        />
                        <span
                          style={{
                            paddingRight: 10,
                            color: colors[i]
                          }}
                        >
                          {percentileFormatter(data[i].inPercent / 100)}
                        </span>
                        {wallet}
                      </Typography>
                    ))}
              </Box>
            </GridItem>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}

export default WalletShares;

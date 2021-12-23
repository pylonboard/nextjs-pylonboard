import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  Box,
  useTheme, Skeleton
} from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';
import { percentileFormatter } from '@/utils/numberFormatters';

function WalletShares({ data, loading }) {

  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%'
        }
      }
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: true,
      y: {
        formatter: (value: number) => percentileFormatter(value / 100),
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
      width: 0
    },
    theme: {
      palette: 'palette3'
    }
  };

  return (
    <Card>
      <CardHeader title={'Wallet %-share of total UST deposited'} />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid
            md={6}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {loading ? (
              <Skeleton variant="circular" width={282} height={282} />
            ) : (
              <Chart
                height={300}
                options={{
                  ...chartOptions,
                  labels: data.map(({ wallet }) => wallet)
                }}
                series={data.map(({ inPercent }) => inPercent)}
                type="donut"
              />
            )}
          </Grid>
          <Grid md={6} item display="flex" alignItems="center">
            <Box sx={{width: "100%" }}>
              {loading ? (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
              ) : (
                data.map(({ wallet }, i: number) => (
                  <Typography
                    key={wallet}
                    variant="body2"
                    sx={{
                      display: 'block',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      py: 0.8,
                      mr: 2
                    }}
                  >
                  <span
                    style={{
                      paddingRight: 10,
                      color: `${theme.palette.primary.main}`
                    }}
                  >
                    {percentileFormatter(data[i].inPercent / 100)}
                  </span>
                    {wallet}
                  </Typography>
                ))
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WalletShares;

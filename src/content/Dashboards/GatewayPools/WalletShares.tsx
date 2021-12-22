import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  Box,
  useTheme,
} from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';
import { percentileFormatter } from '@/utils/numberFormatters';

function WalletShares({ data }) {

  const theme = useTheme();

  const labels = data.map(({ wallet }) => wallet);

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
    labels,
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

  const chartSeries = data.map(({ inPercent }) => inPercent);

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
            <Chart
              height={300}
              options={chartOptions}
              series={chartSeries}
              type="donut"
            />
          </Grid>
          <Grid md={6} item display="flex" alignItems="center">
            <Box sx={{width: "100%" }}>
              {labels.map((label: string, i: number) => (
                <Typography
                  key={label}
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
                    {percentileFormatter(chartSeries[i] / 100)}
                  </span>
                  {label}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WalletShares;

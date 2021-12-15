import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  Box,
  useTheme,
  styled
} from '@mui/material';

import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function SalesByCategory() {

  const theme = useTheme();

  const colors = [
    '#ff0000',
    '#008000',
    '#0000ff',
    '#ffff00',
    '#800080',
    '#ffa500',
    '#008080',
    '#A5462B',
    '#9ea4c1',
    '#787878',
  ]

  const sales = {
    datasets: [
      {
        backgroundColor: colors
      }
    ],
    labels: [
      'terra1l72xv27ez68v0swe9ha29txxg...',
      'terra1ndtc35aawrfnc9tza4kkvga8...',
      'terra1uuy8vrvwk09sh4vq5zy8q5lv...',
      'terra1gdtsmjs3cjpr044e0d83mkcl...',
      'terra1cjcal6j3x8xw4pkjtjevj2tqgeg...',
      'terra16as7w3r6792djckdstjn3r3yj4',
      'terra1a69kq0sh4gq0hmtpns8k3p...',
      'terra1sm0p7gug459al3lwxdk0rem...',
      'terra1szv45efyk0svp5et2gzn6lw7jj...',
      'others',
    ]
  };

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
    colors,
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
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
    labels: sales.labels,
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      palette: 'palette1'
    }
  };

  const chartSeries = [40.2, 4.5, 2.2, 1.3, 0.8, 0.65, 0.65, 0.65, 0.65, 48.4];

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
            <Box>
              {sales.labels.map((label: string, i: number) => (
                <Typography
                  key={label}
                  variant="body2"
                  sx={{
                    py: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    mr: 2
                  }}
                >
                  <DotLegend
                    style={{
                      background: `${sales.datasets[0].backgroundColor[i]}`
                    }}
                  />
                  <span
                    style={{
                      paddingRight: 10,
                      color: `${sales.datasets[0].backgroundColor[i]}`
                    }}
                  >
                    {chartSeries[i]}%
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

export default SalesByCategory;

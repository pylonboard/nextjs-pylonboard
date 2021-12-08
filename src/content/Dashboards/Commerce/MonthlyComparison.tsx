import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Box,
  Grid,
  Typography,
  styled
} from '@mui/material';

import Label from 'src/components/Label';
import ArrowUpwardTwoTone from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoTone from '@mui/icons-material/ArrowDownwardTwoTone';

const ArrowUpwardWrapper = styled(ArrowUpwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.success.main};
`
);

const ArrowDownwardWrapper = styled(ArrowDownwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.error.main};
`
);

function MonthlyComparison() {


  const data = {
    visitors: '65.485',
    conversion: '15.65%',
    revenue: '$8,486'
  };

  return (
    <Card
      sx={{
        pt: 1,
        px: 1,
        height: '100%'
      }}
    >
      <CardHeader
        title={
          <>
            {'Monthly Comparison'}{' '}
            <Typography
              variant="body2"
              component="span"
              fontWeight="bold"
              color="text.secondary"
            >
              (12 {'weeks'})
            </Typography>
          </>
        }
      />
      <CardContent>
        <Box
          sx={{
            px: { lg: 4 },
            pt: 2,
            pb: 1,
            height: '100%',
            flex: 1,
            textAlign: 'center'
          }}
        >
          <Grid spacing={3} container>
            <Grid xs={12} sm item>
              <Typography variant="caption" gutterBottom>
                {'Revenue'}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {data.revenue}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 1
                }}
              >
                <Label color="success">7%</Label>
                <ArrowUpwardWrapper
                  sx={{
                    ml: 0.5,
                    mr: -0.2
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid xs={12} sm item>
              <Typography variant="caption" gutterBottom>
                {'Visitors'}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {data.visitors}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 1
                }}
              >
                <Label color="success">8%</Label>
                <ArrowDownwardWrapper
                  sx={{
                    ml: 0.5,
                    mr: -0.2
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid xs={12} sm item>
              <Typography variant="caption" gutterBottom>
                {'Conversion'}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {data.conversion}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 1
                }}
              >
                <Label color="success">17%</Label>
                <ArrowUpwardWrapper
                  sx={{
                    ml: 0.5,
                    mr: -0.2
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MonthlyComparison;

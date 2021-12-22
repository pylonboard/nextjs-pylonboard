import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Grid,
  Box,
} from '@mui/material';

import { amountFormatter } from '@/utils/numberFormatters';

function DepositMetrics({ data }) {
  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader title={'Deposit Amounts'} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            px: { lg: 4 },
            pt: 2,
            pb: 4,
            height: '100%',
            flex: 1,
            textAlign: 'center'
          }}
        >
          <Grid spacing={3} container>
            <Grid item xs={6} sm={3}>
              <Typography variant="caption" gutterBottom>
                {'Total'}
              </Typography>
              <Typography variant="h3">{amountFormatter(data.totalValueLocked)}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="caption" gutterBottom>
                {'Average'}
              </Typography>
              <Typography variant="h3">{amountFormatter(data.averageDeposit)}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="caption" gutterBottom>
                {'Largest'}
              </Typography>
              <Typography variant="h3">{amountFormatter(data.maxDeposit)}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="caption" gutterBottom>
                {'Smallest'}
              </Typography>
              <Typography variant="h3">{amountFormatter(data.minDeposit)}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DepositMetrics;

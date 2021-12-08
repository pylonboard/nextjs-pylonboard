import { Grid, Typography } from '@mui/material';

import { format } from 'date-fns';

function PageHeader() {


  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="subtitle2">
          {'These are your analytics stats for today'},{' '}
          <b>{format(new Date(), 'MMMM dd yyyy')}</b>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

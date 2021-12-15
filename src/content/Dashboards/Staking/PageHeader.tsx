import { Grid, Typography } from '@mui/material';

function PageHeader() {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {'Pylon MINE staking stats'}
        </Typography>
        <Typography variant="subtitle2">
          {'These are the MINE staking stats until now'}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

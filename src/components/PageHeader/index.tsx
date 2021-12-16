import { Grid, Typography } from '@mui/material';

interface PageHeaderProps {
  title: String;
  subtitle: String;
}
function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

import { Grid, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: String;
  subtitle: String;
  action?: ReactNode;
}
function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {subtitle}
        </Typography>
      </Grid>
      {action && (
        <Grid item>
          {action}
        </Grid>
      )}
    </Grid>
  );
}

export default PageHeader;

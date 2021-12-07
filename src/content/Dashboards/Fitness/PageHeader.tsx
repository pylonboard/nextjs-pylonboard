import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="subtitle2">
          {t('These are your analytics stats for today')},{' '}
          <b>{format(new Date(), 'MMMM dd yyyy')}</b>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;


import Link from 'src/components/Link';

import { Grid, Typography, Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {


  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {'Products'}
        </Typography>
        <Typography variant="subtitle2">
          {'Use this page to manage your products , the fast and easy way.'}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{
            mt: { xs: 2, sm: 0 }
          }}
          component={Link}
          href="/management/commerce/products/create"
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          {'Create product'}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

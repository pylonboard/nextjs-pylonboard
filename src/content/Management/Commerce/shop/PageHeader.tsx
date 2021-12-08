import Link from 'src/components/Link';
import { Box, Grid, Typography, Button } from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

function PageHeader() {


  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {'Storefront'}
            </Typography>
            <Typography variant="subtitle2">
              {'This is a list of all commerce products'}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Button
          sx={{
            mt: { xs: 2, sm: 0 }
          }}
          component={Link}
          startIcon={<EditTwoToneIcon />}
          href="/management/commerce/products"
          variant="contained"
        >
          {'Manage products'}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

import { Typography, Box, Button } from '@mui/material';

import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Link from 'src/components/Link';

function PageHeader() {


  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          {'Hospital Administration'}
        </Typography>
        <Typography variant="subtitle2">
          {"This is your hospital's overview status page"}
        </Typography>
      </Box>
      <Box>
        <Button
          href="/dashboards/healthcare/doctor"
          component={Link}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {'Switch to Doctor Overview'}
        </Button>
      </Box>
    </Box>
  );
}

export default PageHeader;

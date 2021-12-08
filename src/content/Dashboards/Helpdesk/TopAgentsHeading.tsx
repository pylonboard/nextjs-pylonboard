import { Button, Box, Typography } from '@mui/material';


function TopAgentsHeading() {


  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        pb: 3
      }}
    >
      <Typography variant="h3">{'Top Agents'}</Typography>
      <Button color="primary" variant="outlined" size="small">
        {'View all'}
      </Button>
    </Box>
  );
}

export default TopAgentsHeading;

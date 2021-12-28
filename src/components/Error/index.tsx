import { Box, Typography } from '@mui/material';

function Error({ message }) {
  return (
    <Box textAlign="center" sx={{ pt: 2 }}>
      <img
        alt="500"
        height={260}
        src="/static/images/status/500.svg"
      />
      <Typography variant="h2" sx={{ my: 2 }}>
        {'There was an error, please try again later'}
      </Typography>
      <Typography
        variant="h4"
        color="text.secondary"
        fontWeight="normal"
      >
        {message}
      </Typography>
    </Box>
  );
}

export default Error;

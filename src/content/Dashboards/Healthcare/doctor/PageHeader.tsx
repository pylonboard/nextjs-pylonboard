import { Typography } from '@mui/material';


function PageHeader() {


  return (
    <>
      <Typography
        variant="h2"
        component="h3"
        sx={{
          py: 1
        }}
      >
        {'Welcome'}, Dr. Simons!
      </Typography>
      <Typography variant="h4" color="text.secondary" fontWeight="normal">
        {'Since your last login there were'} <b>3</b>{' '}
        {'new patients appointments and '} <b>10</b>{' '}
        {'new prescription requests.'}
      </Typography>
    </>
  );
}

export default PageHeader;

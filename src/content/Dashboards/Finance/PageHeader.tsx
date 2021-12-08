import { Typography } from '@mui/material';


function PageHeader() {


  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        {'Finance Dashboard'}
      </Typography>
      <Typography variant="subtitle2">
        {'This could be your beautiful finance administration panel.'}
      </Typography>
    </>
  );
}

export default PageHeader;

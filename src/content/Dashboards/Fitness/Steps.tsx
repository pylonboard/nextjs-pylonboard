import {
  Card,
  Box,
  Typography,
  Avatar,
  LinearProgress,
  styled
} from '@mui/material';

import DoNotStepTwoToneIcon from '@mui/icons-material/DoNotStepTwoTone';

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
      border-radius: ${theme.general.borderRadius};
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
      margin-bottom: ${theme.spacing(3)};
`
);

function Steps() {


  return (
    <Card
      sx={{
        p: 3
      }}
    >
      <AvatarWrapperSuccess>
        <DoNotStepTwoToneIcon />
      </AvatarWrapperSuccess>
      <Typography
        variant="h3"
        sx={{
          pb: 1
        }}
      >
        {'Steps'}
      </Typography>
      <Typography
        color="text.primary"
        variant="h1"
        sx={{
          pr: 0.5,
          display: 'inline-flex'
        }}
      >
        4500
      </Typography>
      <Typography
        color="text.secondary"
        variant="h4"
        sx={{
          pr: 2,
          display: 'inline-flex'
        }}
      >
        /10000
      </Typography>
      <Box pt={3}>
        <LinearProgress value={45} color="primary" variant="determinate" />
      </Box>
    </Card>
  );
}

export default Steps;

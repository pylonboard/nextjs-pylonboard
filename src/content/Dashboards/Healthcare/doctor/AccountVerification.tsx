import { Button, Card, Typography, Avatar, Box, styled } from '@mui/material';

import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const RootWrapper = styled(Card)(
  ({ theme }) => `
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${theme.colors.gradients.blue3};
      color:  ${theme.colors.alpha.white[100]};
      padding: ${theme.spacing(2)};
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[70]};
`
);

function AccountVerification() {


  return (
    <RootWrapper
      sx={{
        display: { xs: 'block', sm: 'flex' }
      }}
    >
      <Box display="flex" alignItems="center">
        <AvatarSuccess
          sx={{
            mr: 2
          }}
          variant="rounded"
        >
          <AddTaskTwoToneIcon />
        </AvatarSuccess>
        <Box>
          <TypographyPrimary variant="h5">
            {'Account Verification'}
          </TypographyPrimary>
          <TypographySecondary variant="subtitle2">
            {'Your account is almost ready!'}
          </TypographySecondary>
        </Box>
      </Box>
      <Box
        sx={{
          pt: { xs: 2, sm: 0 }
        }}
      >
        <Button variant="contained">{'Confirm email address'}</Button>
      </Box>
    </RootWrapper>
  );
}

export default AccountVerification;

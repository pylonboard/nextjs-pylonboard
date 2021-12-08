import { useRef, useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  Divider,
  alpha,
  List,
  ListItem,
  ListItemText,
  Popover,
  styled,
  Typography
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 1)};
    color: ${theme.colors.alpha.trueWhite[50]};
    background-color: ${theme.colors.alpha.white[10]};
    height: 48px;
    border-radius: ${theme.general.borderRadiusLg};

    .MuiSvgIcon-root {
      transition: ${theme.transitions.create(['color'])};
      font-size: ${theme.typography.pxToRem(24)};
      color: ${theme.colors.alpha.trueWhite[50]};
    }

    .MuiAvatar-root {
      border-radius: ${theme.general.borderRadiusLg};
      width: 34px;
      height: 34px;
    }

    &.Mui-active,
    &:hover {
      background-color: ${alpha(theme.colors.alpha.white[30], 0.2)};

      .MuiSvgIcon-root {
        color: ${theme.colors.alpha.trueWhite[100]};
      }
    }

    .MuiButton-label {
      justify-content: flex-start;
    }
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${theme.palette.secondary.light};
`
);

const UserBoxDescriptionMain = styled(Typography)(
  ({ theme }) => `
        color: ${theme.colors.alpha.trueWhite[50]};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.secondary.main};
    display: block;
`
);

const UserBoxLabelMain = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    display: block;
    color: ${theme.colors.alpha.trueWhite[100]};
`
);

function Userbox() {
  

  const user = {
    avatar: '/static/images/avatars/1.jpg',
    name: 'Rachael Simons',
    jobtitle: 'Lead Developer'
  };

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <UserBoxButton fullWidth color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <UserBoxText>
              <UserBoxLabelMain variant="body1">{user.name}</UserBoxLabelMain>
              <UserBoxDescriptionMain variant="body2">
                {user.jobtitle}
              </UserBoxDescriptionMain>
            </UserBoxText>
          </Box>
          <UnfoldMoreTwoToneIcon
            fontSize="small"
            sx={{
              ml: 1
            }}
          />
        </Box>
      </UserBoxButton>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
      >
        <MenuUserBox
          sx={{
            minWidth: 210
          }}
          display="flex"
        >
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider
          sx={{
            mb: 0
          }}
        />
        <List
          sx={{
            p: 1
          }}
          component="nav"
        >
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
          >
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary={'Profile'} />
          </ListItem>
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
          >
            <InboxTwoToneIcon fontSize="small" />
            <ListItemText primary={'Inbox'} />
          </ListItem>
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary={'Projects'} />
          </ListItem>
        </List>
      </Popover>
    </>
  );
}

export default Userbox;

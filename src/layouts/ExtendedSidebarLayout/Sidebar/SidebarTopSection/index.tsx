import { useRef, useState } from 'react';

import {
  Avatar,
  Box,
  Divider,
  alpha,
  List,
  ListItem,
  ListItemText,
  Popover,
  IconButton,
  Typography,
  styled,
  useTheme
} from '@mui/material';


import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

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

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.sidebar.menuItemColor};
    display: block;

    &.popoverTypo {
      color: ${theme.palette.secondary.main};
    }
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
    color: ${alpha(theme.sidebar.menuItemColor, 0.6)};

    &.popoverTypo {
      color: ${theme.palette.secondary.light};
    }
`
);

function SidebarTopSection() {
  
  const theme = useTheme();

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
    <Box
      sx={{
        textAlign: 'center',
        mx: 2,
        pt: 1,
        position: 'relative'
      }}
    >
      <Avatar
        sx={{
          width: 68,
          height: 68,
          mb: 2,
          mx: 'auto'
        }}
        alt={user.name}
        src={user.avatar}
      />

      <Typography
        variant="h4"
        sx={{
          color: `${theme.colors.alpha.trueWhite[100]}`
        }}
      >
        {user.name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: `${theme.colors.alpha.trueWhite[70]}`
        }}
      >
        {user.jobtitle}
      </Typography>
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          right: theme.spacing(0),
          color: `${theme.colors.alpha.trueWhite[70]}`,
          top: theme.spacing(0),
          background: `${theme.colors.alpha.trueWhite[10]}`,

          '&:hover': {
            color: `${theme.colors.alpha.trueWhite[100]}`,
            background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`
          }
        }}
        ref={ref}
        onClick={handleOpen}
      >
        <UnfoldMoreTwoToneIcon fontSize="small" />
      </IconButton>
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
            <UserBoxLabel className="popoverTypo" variant="body1">
              {user.name}
            </UserBoxLabel>
            <UserBoxDescription className="popoverTypo" variant="body2">
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
    </Box>
  );
}

export default SidebarTopSection;

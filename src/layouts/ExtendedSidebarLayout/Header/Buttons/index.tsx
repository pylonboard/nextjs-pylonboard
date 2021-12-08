import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
import Chat from './Chat';

function HeaderButtons() {
  return (
    <Box>
      <HeaderNotifications />
      <Chat />
    </Box>
  );
}

export default HeaderButtons;

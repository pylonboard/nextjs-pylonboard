import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';

function HeaderButtons() {
  return (
    <Box
      sx={{
        mr: 1
      }}
    >
      <HeaderNotifications />
    </Box>
  );
}

export default HeaderButtons;

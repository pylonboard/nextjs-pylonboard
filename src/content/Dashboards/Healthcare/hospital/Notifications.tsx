import {
  Button,
  Card,
  CardHeader,
  List,
  ListItem,
  Typography,
  Divider,
  Avatar,
  Box,
  ListItemText,
  ListItemAvatar,
  useTheme
} from '@mui/material';

import Label from 'src/components/Label';
import { formatDistance, subDays, subHours, subMinutes } from 'date-fns';

function Notifications() {
  
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={'Notifications'}
        action={
          <Button variant="outlined" size="small">
            {'View all'}
          </Button>
        }
      />
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            py: 2.5,
            display: 'block'
          }}
        >
          <Box display="flex" alignItems="center">
            <ListItemAvatar>
              <Avatar src="/static/images/avatars/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Makenna Arcand"
              primaryTypographyProps={{ variant: 'h5', noWrap: true }}
              secondary={'Doctor (Pediatrician)'}
              secondaryTypographyProps={{
                variant: 'body2',
                color: 'textSecondary',
                noWrap: true
              }}
            />
            <Label color="error">{'Time-Off'}</Label>
            <Box
              sx={{
                minWidth: 130
              }}
            >
              <Typography variant="h5" align="right" noWrap>
                {'Posted'}
              </Typography>
              <Typography variant="subtitle1" align="right" noWrap>
                {formatDistance(subMinutes(new Date(), 12), new Date(), {
                  addSuffix: true
                })}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{
              pt: 1
            }}
          >
            {'Reported time-off leave'}: 21-27 March 2022
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 2.5,
            display: 'block'
          }}
        >
          <Box display="flex" alignItems="center">
            <ListItemAvatar>
              <Avatar src="/static/images/avatars/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Emerson Lubin"
              primaryTypographyProps={{ variant: 'h5', noWrap: true }}
              secondary={'Patient'}
              secondaryTypographyProps={{
                variant: 'body2',
                color: 'textSecondary',
                noWrap: true
              }}
            />
            <Label color="info">{'Patients'}</Label>
            <Box
              sx={{
                minWidth: 130
              }}
            >
              <Typography variant="h5" align="right" noWrap>
                {'Posted'}
              </Typography>
              <Typography variant="subtitle1" align="right" noWrap>
                {formatDistance(subHours(new Date(), 13), new Date(), {
                  addSuffix: true
                })}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{
              pt: 1
            }}
          >
            {'Cancelled the scheduled consult set for'}: 21 March 2021
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 2.5,
            display: 'block'
          }}
        >
          <Box display="flex" alignItems="center">
            <ListItemAvatar>
              <Avatar
                sx={{
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.colors.alpha.white[100]}`
                }}
              >
                PD
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Phillip Dias"
              primaryTypographyProps={{ variant: 'h5', noWrap: true }}
              secondary={'Doctor (Neurosurgeon)'}
              secondaryTypographyProps={{
                variant: 'body2',
                color: 'textSecondary',
                noWrap: true
              }}
            />
            <Label color="error">{'Time-Off'}</Label>
            <Box
              sx={{
                minWidth: 130
              }}
            >
              <Typography variant="h5" align="right" noWrap>
                {'Posted'}
              </Typography>
              <Typography variant="subtitle1" align="right" noWrap>
                {formatDistance(subDays(new Date(), 14), new Date(), {
                  addSuffix: true
                })}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{
              pt: 1
            }}
          >
            {'Reported time-off leave'}: 02-18 February 2021
          </Typography>
        </ListItem>
      </List>
    </Card>
  );
}

export default Notifications;

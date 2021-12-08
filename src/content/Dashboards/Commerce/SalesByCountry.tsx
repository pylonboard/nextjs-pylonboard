import {
  Card,
  Box,
  CardHeader,
  ListItemText,
  Typography,
  Divider,
  List,
  ListItem,
  LinearProgress,
  styled
} from '@mui/material';


const LinearProgressWrapper = styled(LinearProgress)(
  () => `
        flex-grow: 1;
`
);

function SalesByCountry() {
  

  return (
    <Card>
      <CardHeader title={'Sales by Country'} />
      <Divider />
      <List disablePadding component="div">
        <ListItem
          component="div"
          sx={{
            py: 2,
            flexDirection: 'column'
          }}
        >
          <Box display="flex" alignItems="center" width="100%">

            <ListItemText
              primary="USA"
              primaryTypographyProps={{
                variant: 'h5',
                color: 'textPrimary',
                noWrap: true
              }}
            />

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {'Orders'}
                </Typography>
                <Typography align="right" variant="h5">
                  8
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {'Total'}
                </Typography>
                <Typography align="right" variant="h5">
                  $5,493.22
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="block"
            width="100%"
            sx={{
              mt: 2
            }}
          >
            <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          component="div"
          sx={{
            py: 2,
            flexDirection: 'column'
          }}
        >
          <Box display="flex" alignItems="center" width="100%">
            <ListItemText
              primary="Spain"
              primaryTypographyProps={{
                variant: 'h5',
                color: 'textPrimary',
                noWrap: true
              }}
            />

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {'Orders'}
                </Typography>
                <Typography align="right" variant="h5">
                  41
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {'Total'}
                </Typography>
                <Typography align="right" variant="h5">
                  $7,489.00
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="block"
            width="100%"
            sx={{
              mt: 2
            }}
          >
            <LinearProgressWrapper
              value={23}
              color="primary"
              variant="determinate"
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          component="div"
          sx={{
            py: 2,
            flexDirection: 'column'
          }}
        >
          <Box display="flex" alignItems="center" width="100%">
            <ListItemText
              primary="Germany"
              primaryTypographyProps={{
                variant: 'h5',
                color: 'textPrimary',
                noWrap: true
              }}
            />

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {'Orders'}
                </Typography>
                <Typography align="right" variant="h5">
                  12
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {'Total'}
                </Typography>
                <Typography align="right" variant="h5">
                  $3,589.33
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="block"
            width="100%"
            sx={{
              mt: 2
            }}
          >
            <LinearProgressWrapper
              value={34}
              color="primary"
              variant="determinate"
            />
          </Box>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
}

export default SalesByCountry;

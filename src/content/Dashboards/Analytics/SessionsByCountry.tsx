import {
  CardHeader,
  Divider,
  Card,
  LinearProgress,
  List,
  ListItem,
  Box,
  Typography,
  styled
} from '@mui/material';


const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        margin-right: ${theme.spacing(1)};
`
);

const ListItemWrapper = styled(ListItem)(
  () => `
        border-radius: 0;
`
);

function SessionsByCountry() {


  return (
    <Card>
      <CardHeader title={'Sessions by Country'} />
      <Divider />
      <List disablePadding component="nav">
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            USA
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              57%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Germany
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={34}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              34%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            France
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={21}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              21%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Spain
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={13}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              13%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            China
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={71}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              71%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
      </List>
    </Card>
  );
}

export default SessionsByCountry;

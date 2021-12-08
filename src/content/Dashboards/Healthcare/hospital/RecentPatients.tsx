import {
  Button,
  Card,
  Avatar,
  CardHeader,
  Pagination,
  CardActions,
  Typography,
  Divider,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Tooltip,
  IconButton,
  useTheme,
  Box,
  TableContainer,
  styled
} from '@mui/material';

import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { format, subHours, subDays } from 'date-fns';
import Text from 'src/components/Text';

const DotSuccess = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.success.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotWarning = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.warning.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function RecentPatients() {

  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={'Recent Patients'}
        action={
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          >
            {'Detailed View'}
          </Button>
        }
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{'Patient Name'}</TableCell>
              <TableCell>{'Gender'}</TableCell>
              <TableCell>{'Doctor'}</TableCell>
              <TableCell>{'Weight'}</TableCell>
              <TableCell>{'Department'}</TableCell>
              <TableCell align="right">{'Actions'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src="/static/images/avatars/1.jpg" />
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Marilyn Stanton
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      {'Admitted'}{' '}
                      {format(subHours(new Date(), 5), 'MMMM dd yyyy')}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {'Female'}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>
                    <img alt="..." src="/static/images/avatars/5.jpg" />
                  </Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Carter Gouse
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                      }}
                    >
                      <DotWarning />
                      <Text color="warning">{'On Planned Leave'}</Text>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  98kg
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {'Pediatrics'}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Tooltip title={'Edit Patient Details'} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter },
                      color: theme.palette.primary.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Delete Patient Records'} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.error.lighter },
                      color: theme.palette.error.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <DeleteTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>NL</Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Nolan Lubin
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      {'Admitted'}{' '}
                      {format(subDays(new Date(), 12), 'MMMM dd yyyy')}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {'Male'}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>
                    <img alt="..." src="/static/images/avatars/4.jpg" />
                  </Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Craig Schleifer
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                      }}
                    >
                      <DotSuccess />
                      <Text color="success">{'On Duty'}</Text>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  86.35kg
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {'Cardiology'}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Tooltip title={'Edit Patient Details'} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter },
                      color: theme.palette.primary.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Delete Patient Records'} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.error.lighter },
                      color: theme.palette.error.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <DeleteTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>LT</Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Lincoln Torff
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      {'Admitted'}{' '}
                      {format(subDays(new Date(), 5), 'MMMM dd yyyy')}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {'Male'}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>
                    <img alt="..." src="/static/images/avatars/3.jpg" />
                  </Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Gretchen Rosser
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                      }}
                    >
                      <DotWarning />
                      <Text color="warning">{'On Planned Leave'}</Text>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  75.50kg
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {'Neurology'}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Tooltip title={'Edit Patient Details'} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter },
                      color: theme.palette.primary.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Delete Patient Records'} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.error.lighter },
                      color: theme.palette.error.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <DeleteTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions
        disableSpacing
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Pagination count={6} color="primary" />
      </CardActions>
    </Card>
  );
}

export default RecentPatients;

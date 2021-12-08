import {
  Grid,
  Card,
  Typography,
  Box,
  alpha,
  LinearProgress,
  linearProgressClasses,
  styled,
  useTheme
} from '@mui/material';



const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.warning.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.warning.main};
        }
    `
);

const LinearProgressBlack = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.alpha.black[100]};
        }
    `
);

const LinearProgressInfo = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.info.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.info.main};
        }
    `
);

function Block2() {

  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography color="text.primary" variant="h4" gutterBottom>
                {'Deliveries'}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {'Total deliveries to date'}
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.black[100]}`
              }}
            >
              23,594
            </Typography>
          </Box>
          <LinearProgressBlack variant="determinate" value={66.43} />
          <Box
            display="flex"
            sx={{
              mt: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              {'Target'}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography color="text.primary" variant="h4" gutterBottom>
                {'Orders'}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {'Total orders to date'}
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.info.main}`
              }}
            >
              $12,346
            </Typography>
          </Box>
          <LinearProgressInfo variant="determinate" value={44.32} />
          <Box
            display="flex"
            sx={{
              mt: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              {'Target'}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography color="text.primary" variant="h4" gutterBottom>
                {'Customers'}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {'Total customers to date'}
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            >
              $2.31M
            </Typography>
          </Box>
          <LinearProgressWarning variant="determinate" value={37.21} />
          <Box
            display="flex"
            sx={{
              mt: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              {'Target'}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;

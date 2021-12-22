import {
  Box, Card,
  Container,
  Grid, styled, Typography, useTheme
} from '@mui/material';
import { gql, useQuery } from '@apollo/client';
import { amountFormatter } from '@/utils/numberFormatters';

const TypographyHeading = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const QUERY = gql`
    query GatewayPoolTotalValues {
        gatewayPoolTotalValues {
            totalValueLocked
            valueLocked24h
            valueLocked7d
            valueLocked30d
        }
    }
`;


function GatewayPoolStats() {
  const theme = useTheme();
  const { data, loading } = useQuery(QUERY);

  if (loading) {
    return null;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <TypographyHeading
              variant="h3"
            >
              {'Gateway Pools Metrics'}
            </TypographyHeading>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            sx={{
              px: 3,
              pb: 6,
              pt: 3
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
              >
                {'Total'}
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                ml: -2,
                pt: 2,
                pb: 1.5,
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  pl: 1,
                  fontSize: `${theme.typography.pxToRem(35)}`
                }}
                variant="h1"
              >
                {amountFormatter(data.gatewayPoolTotalValues.totalValueLocked)}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            sx={{
              px: 3,
              pb: 6,
              pt: 3
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
              >
                {'24 hours'}
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                pt: 2,
                pb: 1.5,
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  pl: 1,
                  fontSize: `${theme.typography.pxToRem(35)}`
                }}
                variant="h1"
              >
                {amountFormatter(data.gatewayPoolTotalValues.valueLocked24h)}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            sx={{
              px: 3,
              pb: 6,
              pt: 3
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
              >
                {'7 days'}
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                pt: 2,
                pb: 1.5,
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  pl: 1,
                  fontSize: `${theme.typography.pxToRem(35)}`
                }}
                variant="h1"
              >
                {amountFormatter(data.gatewayPoolTotalValues.valueLocked7d)}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card
            sx={{
              px: 3,
              pb: 6,
              pt: 3
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
              >
                {'30 days'}
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                pt: 2,
                pb: 1.5,
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  pl: 1,
                  fontSize: `${theme.typography.pxToRem(35)}`
                }}
                variant="h1"
              >
                {amountFormatter(data.gatewayPoolTotalValues.valueLocked30d)}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GatewayPoolStats;

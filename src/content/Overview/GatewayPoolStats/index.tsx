import {
  Box, Card,
  Container,
  Grid, Skeleton, styled, Typography, useTheme
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

const ValueLabels = [
  {
    value: 'totalValueLocked',
    label: 'Total Value Locked'
  }, {
    value: 'valueLocked24h',
    label: 'Last 24 hours'
  }, {
    value: 'valueLocked7d',
    label: 'Last 7 days'
  }, {
    value: 'valueLocked30d',
    label: 'Last 30 days',
  }
]

function GatewayPoolStats() {
  const theme = useTheme();
  const { data, loading } = useQuery(QUERY);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <TypographyHeading
              variant="h3"
            >
              {'Gateway Pools TVL'}
            </TypographyHeading>
          </Box>
        </Grid>
        {ValueLabels.map(({ value, label }) => (
          <Grid key={value} item xs={12} sm={6} lg={3}>
            <Card
              sx={{
                px: 3,
                pt: 3,
                pb: 6,
              }}
            >
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: `${theme.typography.pxToRem(15)}`,
                    fontWeight: 'bold'
                  }}
                  variant="subtitle2"
                >
                  {label}
                </Typography>
              </Box>
              <Box
                textAlign="center"
                sx={{
                  mt: 2,
                  pt: 2,
                  pb: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: `${theme.typography.pxToRem(35)}`
                  }}
                  display="inline-block"
                  variant="h1"
                >
                  {loading ? (
                    <Skeleton animation="pulse" width={130} />
                  ) : (
                    amountFormatter(data.gatewayPoolTotalValues[value])
                  )}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default GatewayPoolStats;

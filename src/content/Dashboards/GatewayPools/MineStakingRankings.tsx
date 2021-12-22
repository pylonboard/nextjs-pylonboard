import {
  Card,
  CardHeader,
  Typography,
  Divider,
  Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Skeleton
} from '@mui/material';

import { amountFormatter } from '@/utils/numberFormatters';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
    query GatewayPoolStats($gatewayIdentifier: GatewayPoolIdentifier!) {
        gatewayPoolMineRanking(gatewayPoolIdentifier: $gatewayIdentifier) {
            tier1 {
                depositAmountMax
                depositAmountMin
                depositAmountSum
                depositAmountAvg
                depositAmountMedian
            }
            tier2 {
                depositAmountMax
                depositAmountMin
                depositAmountSum
                depositAmountAvg
                depositAmountMedian
            }
            tier3 {
                depositAmountMax
                depositAmountMin
                depositAmountSum
                depositAmountAvg
                depositAmountMedian
            }
            tier4 {
                depositAmountMax
                depositAmountMin
                depositAmountSum
                depositAmountAvg
                depositAmountMedian
            }
            tier5 {
                depositAmountMax
                depositAmountMin
                depositAmountSum
                depositAmountAvg
                depositAmountMedian
            }
        }
    }
`;

const RankingLabels = {
  tier1: '1 to 1K',
  tier2: '1K to 10K',
  tier3: '10K to 100K',
  tier4: '100K to 220K',
  tier5: '220K+',
}

function MineStakingRankings({ gatewayIdentifier }) {
  const { data, loading } = useQuery(QUERY, {
    variables: {
      gatewayIdentifier: gatewayIdentifier
    }});

  return (
    <Card variant="outlined">
      <CardHeader title={'MINE staker deposit metrics'}/>
      <Divider />
        <TableContainer>
          {loading ? (
            <Skeleton variant="rectangular" height={320} />
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{'Staked MINE'}</TableCell>
                  <TableCell>{'AVG deposited (UST)'}</TableCell>
                  <TableCell align="center">{'SUM deposited (UST)'}</TableCell>
                  <TableCell align="center">{'MIN deposited (UST)'}</TableCell>
                  <TableCell align="right">{'MAX deposited (UST)'}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(data.gatewayPoolMineRanking).map(key => (
                  <TableRow hover key={key}>
                    <TableCell>
                      <Box>
                        <Typography variant="h4">
                          {RankingLabels[key]}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h4">
                          {amountFormatter(data.gatewayPoolMineRanking[key].depositAmountAvg)}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box>
                        <Typography variant="h4">
                          {amountFormatter(data.gatewayPoolMineRanking[key].depositAmountSum)}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box>
                        <Typography variant="h4">
                          {amountFormatter(data.gatewayPoolMineRanking[key].depositAmountMin)}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box>
                        <Typography variant="h4">
                          {amountFormatter(data.gatewayPoolMineRanking[key].depositAmountMax)}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
    </Card>
  );
}

export default MineStakingRankings;

import { Fragment } from 'react';
import {
  Divider,
  Box,
  Card,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  CardHeader, Skeleton, CardContent
} from '@mui/material';
import { amountFormatter } from '@/utils/numberFormatters';
import { gql, useQuery } from '@apollo/client';
import Error from '@/components/Error';

const QUERY = gql`
    query MineRankings {
        mineRankings {
            percentile99 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            percentile95 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            percentile90 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            percentile75 {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
            floor {
                percentileFloor
                walletsIncluded
                amountOfMine
            }
        }
    }
`;

const PercentileLabels = {
  percentile99: '99%',
  percentile95: '95%',
  percentile90: '90%',
  percentile75: '75%',
  floor: 'floor',
}

function MetricsTable() {
  const { data, loading, error } = useQuery(QUERY);
console.log('data', data);
  return (
    <Card variant="outlined">
      <CardHeader title={'MINE Metrics'}/>
      <Divider />
      {!loading && error ? (
        <CardContent>
          <Error message={error.message} />
        </CardContent>

      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{'Percentile'}</TableCell>
                <TableCell>{'Floor'}</TableCell>
                <TableCell align="center">{'Wallets'}</TableCell>
                <TableCell align="right">{'Amount of MINE'}</TableCell>
              </TableRow>
            </TableHead>
            {loading ? (
              <TableBody>
                {Array.from(Array(5), Math.random).map(value => (
                  <TableRow key={value}>
                    <TableCell>
                      <Skeleton/>
                    </TableCell>
                    <TableCell>
                      <Skeleton/>
                    </TableCell>
                    <TableCell>
                      <Skeleton/>
                    </TableCell>
                    <TableCell>
                      <Skeleton/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                {Object.keys(data.mineRankings).map(key => (
                  <Fragment key={key}>
                    <TableRow hover key={key}>
                      <TableCell>
                        <Box>
                          <Typography variant="h4">{PercentileLabels[key]}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h4">
                            {amountFormatter(data.mineRankings[key].percentileFloor)}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box>
                          <Typography variant="h4">{data.mineRankings[key].walletsIncluded}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box>
                          <Typography variant="h4">
                            {amountFormatter(data.mineRankings[key].amountOfMine)}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </Card>
  );
}

export default MetricsTable;

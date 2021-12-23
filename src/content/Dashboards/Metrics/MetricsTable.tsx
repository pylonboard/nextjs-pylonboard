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
  CardHeader, Skeleton
} from '@mui/material';

const PercentileLabels = {
  percentile99: '99%',
  percentile95: '95%',
  percentile90: '90%',
  percentile75: '75%',
  floor: 'floor',
}

function MetricsTable({ data, loading }) {
  return (
    <Card variant="outlined">
      <CardHeader title={'MINE Metrics'}/>
      <Divider />
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
              {Object.keys(data).map(key => (
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
                          {new Intl.NumberFormat('en-US', {
                            notation: "compact",
                            compactDisplay: "short",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }).format(data[key].percentileFloor)}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box>
                        <Typography variant="h4">{data[key].walletsIncluded}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box>
                        <Typography variant="h4">
                          {new Intl.NumberFormat('en-US', {
                            notation: "compact",
                            compactDisplay: "short",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }).format(data[key].amountOfMine)}
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
    </Card>
  );
}

export default MetricsTable;

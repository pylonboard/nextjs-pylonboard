import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';

import {
  Divider,
  Box,
  Card,
  Typography,
  TablePagination,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  Skeleton,
  styled,
  useTheme, CardHeader, CardContent
} from '@mui/material';
import Link from 'src/components/Link';

import { gql, useQuery } from '@apollo/client';

const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-weight: normal;
          color: ${theme.colors.alpha.black[100]};
          font-size: ${theme.typography.pxToRem(16)};
          padding: ${theme.spacing(2)};
      }

      .MuiTableRow-root {
          background: transparent;
      }
  `
);

const dateFormatter = timestamp =>
  new Intl.DateTimeFormat('default', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  }).format(new Date(timestamp))

const QUERY = gql`
    query WalletStats($skip: Int, $take: Int) {
        mineWalletStats(skip: $skip, take: $take, sortBy: "stakedSince") {
            items {
                wallet
                stakedSince
                sum
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            totalCount
        }
    }
`;

function WalletAmountsTable() {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);

  const { data, loading, fetchMore } = useQuery(QUERY, {
    variables: {
      skip: page,
      take: rowsPerPage
    }
  });

  useEffect(() => {
    if (data) {
      setCount(data.mineWalletStats.totalCount)
      if (page && fetchMore) {
        fetchMore({
          variables: {
            take: data.mineWalletStats.items.length
          }
        })
      }
    }
  }, [data, page]);

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card variant="outlined">
      <CardHeader title={'Wallet Amounts'} />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{'Wallet'}</TableCell>
                <TableCell align="center">{'Staked Since'}</TableCell>
                <TableCell align="right">{'Amount'}</TableCell>
              </TableRow>
            </TableHeadWrapper>

            {loading ? (
              <TableBody>
                {Array.from(Array(rowsPerPage), Math.random).map(value => (
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
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                {data.mineWalletStats.items.map(({ wallet, stakedSince, sum }) =>
                  <TableRow key={wallet}>
                    <TableCell>
                      <Box>
                        <Link
                          href={`https://finder.terra.money/columbus-5/address/${wallet}`}
                          target="_blank"
                          rel="noopener"
                          title={wallet}
                          color={`${theme.colors.primary.main}`}
                          underline="none"
                          textOverflow="ellipsis"
                          variant="h5"
                          noWrap
                          overflow="hidden"
                          display="block"
                          sx={{
                            width: '120px',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {wallet}
                        </Link>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box>
                        <Typography variant="h5"  noWrap>
                          {dateFormatter(stakedSince)}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box>
                        <Typography variant="h4">
                          {new Intl.NumberFormat('default', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2
                          }).format(sum)}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <Box pt={1} display="flex" justifyContent="flex-end">
          <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default WalletAmountsTable;
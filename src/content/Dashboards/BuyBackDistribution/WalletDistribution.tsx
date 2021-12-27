import { useEffect, useState } from 'react';
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
  useTheme, InputAdornment, styled, TextField, Skeleton, CardHeader, IconButton, CardContent
} from '@mui/material';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import Text from '@/components/Text';
import Link from '@/components/Link';
import Error from '@/components/Error';

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
    border-radius: ${theme.general.borderRadius};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(16)};
    }
  `
);

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

const QUERY_MINE_TREASURY_BY_WALLET = gql`
    query MineTreasuryBuybackByWallet($wallet: String!) {
        mineTreasuryBuybackByWallet(wallet: $wallet) {
            ustAmount
            mineAmount
            transactionHash
            createdAt
        }
    }
`;

const QUERY_MINE_TREASURY = gql`
    query MineTreasury {
        mineTreasury {
            buybacks {
                ustAmount
                mineAmount
                createdAt
                transactionHash
            }
        }
    }
`;

function WalletDistribution() {
  const theme = useTheme()
  const [search, setSearch] = useState('');
  const [tableData, setTableData] = useState([]);
  const [buybacks, setBuybacks] = useState([]);
  const { data: dataBuybacks, loading: loadingBuybacks, error: errorBuybacks } = useQuery(QUERY_MINE_TREASURY);
  const [loadWalletDistribution, { called, data: dataWallet, loading: loadingWallet }] = useLazyQuery(QUERY_MINE_TREASURY_BY_WALLET);

  useEffect(() => {
    if (dataBuybacks) {
      setBuybacks(dataBuybacks.mineTreasury.buybacks)
    }
  }, [dataBuybacks]);

  useEffect(() => {
    if (!loadingWallet) {
      if (dataWallet && dataWallet.mineTreasuryBuybackByWallet.length) {
        setTableData(dataWallet.mineTreasuryBuybackByWallet)
      } else {
        if (!search) {
          setTableData(buybacks)
        } else {
          setTableData([])
        }
      }
    }
  }, [loadingWallet, dataWallet, buybacks, search]);

  useEffect(() => {
    if (search) {
      loadWalletDistribution({
        variables: {
          wallet: search
        }})
    } else {
      setTableData(buybacks)
    }
  }, [search])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  };

  const handleClearSearch = () => {
    setSearch('')
  };

  const isLoading = (loadingBuybacks || loadingWallet);

  if (!isLoading && errorBuybacks) {
    return (
      <Card variant="outlined">
        <CardHeader title="Buyback distributions" />
        <Divider />
        <CardContent>
          <Error message={errorBuybacks.message} />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card variant="outlined">
      <Box
        p={3}
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
      >
        <SearchInputWrapper
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            ),
            endAdornment: search && (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClearSearch}
                  disableRipple
                >
                  <ClearTwoToneIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          onChange={handleSearch}
          placeholder={'Add your wallet address...'}
          fullWidth
          value={search}
        />
      </Box>
      <Divider />

      <Box px={3}>
        <CardHeader
          title={search ? `Buyback distributions for: ${search}` : `Buyback distributions`}
          subheader={called && !isLoading && !tableData.length && <Text color="error">Wallet Not Found</Text>}
        />
      </Box>
      <Divider />

      {isLoading ? (
        <Box px={3} pb={3}>
          <TableContainer>
            <Table>
              <TableHeadWrapper>
                <TableRow>
                  <TableCell>{'Tx Hash'}</TableCell>
                  <TableCell>{'UST'}</TableCell>
                  <TableCell align="center">{'MINE'}</TableCell>
                  <TableCell align="right">{'Date'}</TableCell>
                </TableRow>
              </TableHeadWrapper>
              <TableBody>
                {Array.from(Array(10), Math.random).map(value => (
                  <TableRow key={value}>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box px={3} pb={3}>
          {(!!tableData.length) && (
            <TableContainer>
              <Table>
                <TableHeadWrapper>
                  <TableRow>
                    <TableCell>{'Tx Hash'}</TableCell>
                    <TableCell>{'UST'}</TableCell>
                    <TableCell align="center">{'MINE'}</TableCell>
                    <TableCell align="right">{'Date'}</TableCell>
                  </TableRow>
                </TableHeadWrapper>
                <TableBody>
                  {tableData.map(({ ustAmount, mineAmount, transactionHash, createdAt }) => (
                    <TableRow key={transactionHash}>
                      <TableCell>
                        <Box sx={{ width: '120px' }}>
                          <Link
                            href={`https://finder.terra.money/mainnet/tx/${transactionHash}`}
                            target="_blank"
                            rel="noopener"
                            title={transactionHash}
                            color={`${theme.colors.primary.main}`}
                            underline="none"
                            textOverflow="ellipsis"
                            variant="body2"
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
                            {transactionHash}
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="h4">
                            {new Intl.NumberFormat('default', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(ustAmount)}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box>
                          <Typography variant="h4">
                            {new Intl.NumberFormat('default', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(mineAmount)}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box>
                          <Typography variant="body2">
                            {new Intl.DateTimeFormat('default', {
                              dateStyle: 'medium',
                              timeStyle: 'medium'
                            }).format(new Date(createdAt))}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      )}
    </Card>
  );
}

export default WalletDistribution;

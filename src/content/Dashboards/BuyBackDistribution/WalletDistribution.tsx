import { Fragment} from 'react';
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
  useTheme, InputAdornment, styled, TextField, Skeleton
} from '@mui/material';
import { gql, useLazyQuery } from '@apollo/client';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

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

const QUERY = gql`
    query MineTreasuryBuybackByWallet($wallet: String!) {
        mineTreasuryBuybackByWallet(wallet: $wallet) {
            ustAmount
            mineAmount
            transactionHash
            createdAt
        }
    }
`;

function WalletDistribution() {
  const theme = useTheme()
  const [loadWalletDistribution, { called, data, loading }] = useLazyQuery(QUERY);


  const handleSearch = (event) => {
    loadWalletDistribution({
      variables: {
        wallet: event.target.value
      }})
  };

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
            )
          }}
          onChange={handleSearch}
          placeholder={'Add your wallet address...'}
          fullWidth
        />
      </Box>
      <Divider />
      {(called && loading) ? (
          <Box px={3} py={3}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Box>
      ) : (
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
                {data && data.mineTreasuryBuybackByWallet.map(({ ustAmount, mineAmount, transactionHash, createdAt }) => (
                  <Fragment key={transactionHash}>
                    <TableRow>
                      <TableCell>
                        <Box sx={{ width: '120px' }}>
                          <Typography
                            title={transactionHash}
                            noWrap
                            variant="body2">
                            {transactionHash}
                          </Typography>
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
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Card>
  );
}

export default WalletDistribution;

import {
  Box,
  useTheme,
  Typography,
  Divider,
  Card,
  styled,
  Modal,
  Skeleton,
  Avatar,
  Fade,
} from '@mui/material';
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import Scrollbar from '@/components/Scrollbar';
import { stringMiddleTruncate } from '@/utils/stringMiddleTruncate';
import Link from '@/components/Link';
import Error from '@/components/Error';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.5, 1)};
  `
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[100]};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin-left: ${theme.spacing(1.5)};
      
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
`
);

const QUERY = gql`
  query MyGatewayPoolsDetails($terraWallet: String!, $poolContractId: String!) {
    myGatewayPoolsDetails(
      terraWallet: $terraWallet
      poolContractId: $poolContractId
    ) {
      amount
      denominator
      createdAt
      operation
      txHash
    }
  }
`;

function GatewayPoolDetails({
  handleClose,
  isOpen,
  title,
  logo,
  terraWallet,
  poolContractId
}) {
  const theme = useTheme();
  const [getPoolDetails, { data, loading, error }] = useLazyQuery(QUERY);

  useEffect(() => {
    isOpen &&
      getPoolDetails({
        variables: {
          terraWallet,
          poolContractId
        }
      });
  }, [isOpen]);

  const OPERATION_COLORS = {
    CLAIM: theme.colors.success,
    DEPOSIT: theme.colors.warning,
    WITHDRAW: theme.colors.info
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby={title}
        aria-describedby="transactions-desc"
      >
        <Fade in={isOpen}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: { sm: '50%' },
              left: { sm: '50%' },
              transform: { sm: 'translate(-50%, -50%)' },
              width: { xs: '100%', sm: 420 },
              height: { xs: '100%', sm: 600 }
            }}
          >
            <Box
              p={2.5}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box onTouchEnd={handleClose}>
                <Typography id={title} gutterBottom variant="h4">
                  Transactions
                </Typography>
                <Typography id="transactions-desc" variant="subtitle2">
                  Timeline of your <b>{title}</b> transactions
                </Typography>
              </Box>
              <Box>
                <AvatarWrapper>
                  <img src={logo} alt={title} />
                </AvatarWrapper>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                flex: 1,
              }}
            >
              {!error && loading ? (
                <Skeleton variant="rectangular" height="100%" />
              ) : error ? (
                <Error message={error.message} />
              ) : (
                <Scrollbar>
                  <Timeline>
                    {data &&
                      data.myGatewayPoolsDetails.map(
                        ({
                          txHash,
                          amount,
                          denominator,
                          operation,
                          createdAt
                        }) => (
                          <TimelineItem
                            key={txHash}
                            sx={{
                              p: 0
                            }}
                          >
                            <TimelineOppositeContent
                              sx={{
                                width: '105px',
                                flex: 'none'
                              }}
                              color="text.secondary"
                            >
                              {new Intl.DateTimeFormat('default', {
                                day: 'numeric',
                                month: 'short',
                                year: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                              })
                                .format(new Date(createdAt))
                                .replace(',', '')}
                            </TimelineOppositeContent>
                            <TimelineSeparator
                              sx={{
                                position: 'relative'
                              }}
                            >
                              <TimelineDot
                                sx={{
                                  marginTop: 0,
                                  top: theme.spacing(1.2)
                                }}
                                variant="outlined"
                                color="primary"
                              />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                              sx={{
                                pb: 4
                              }}
                            >
                              <LabelWrapper
                                component="span"
                                sx={{
                                  background: `${OPERATION_COLORS[operation].main}`,
                                  color: `${theme.palette.getContrastText(
                                    OPERATION_COLORS[operation].dark
                                  )}`
                                }}
                              >
                                {operation}
                              </LabelWrapper>
                              <Typography
                                sx={{
                                  pt: 1
                                }}
                                variant="h4"
                                color="text.primary"
                              >
                                {`${amount} ${denominator}`}
                              </Typography>
                              <Link
                                href={`https://finder.extraterrestrial.money/mainnet/tx/${txHash}`}
                                target="_blank"
                                rel="noopener"
                                title={txHash}
                                underline="none"
                                variant="body2"
                                overflow="hidden"
                                display="block"
                                sx={{
                                  pt: 0.5,
                                  '&:hover': {
                                    textDecoration: 'underline'
                                  }
                                }}
                              >
                                {stringMiddleTruncate(txHash)}
                              </Link>
                            </TimelineContent>
                          </TimelineItem>
                        )
                      )}
                  </Timeline>
                </Scrollbar>
              )}
            </Box>
          </Card>
        </Fade>
      </Modal>
    </>
  );
}

export default GatewayPoolDetails;

import {
  ConnectType,
  useWallet,
  WalletStatus
} from '@terra-money/wallet-provider';
import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Popover,
  Typography,
  useTheme
} from '@mui/material';
import { stringMiddleTruncate } from '@/utils/stringMiddleTruncate';
import { LoadingButton } from '@mui/lab';

const TerraConnectIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2.98438 3.25001H12.9844C13.1012 3.24995 13.2179 3.25736 13.3337 3.27219C13.2945 2.9965 13.1998 2.73161 13.0554 2.4935C12.9109 2.2554 12.7198 2.049 12.4935 1.88676C12.2671 1.72452 12.0103 1.60979 11.7384 1.5495C11.4665 1.48921 11.1853 1.4846 10.9116 1.53594L2.6875 2.94001H2.67812C2.1619 3.03873 1.70283 3.3308 1.39469 3.75657C1.85894 3.42636 2.41467 3.24927 2.98438 3.25001ZM12.9844 4.00001H2.98438C2.45412 4.00059 1.94575 4.21149 1.5708 4.58643C1.19585 4.96138 0.984954 5.46975 0.984375 6.00001V12C0.984954 12.5303 1.19585 13.0386 1.5708 13.4136C1.94575 13.7885 2.45412 13.9994 2.98438 14H12.9844C13.5146 13.9994 14.023 13.7885 14.3979 13.4136C14.7729 13.0386 14.9838 12.5303 14.9844 12V6.00001C14.9838 5.46975 14.7729 4.96138 14.3979 4.58643C14.023 4.21149 13.5146 4.00059 12.9844 4.00001ZM11.5 10C11.3022 10 11.1089 9.94136 10.9444 9.83148C10.78 9.7216 10.6518 9.56542 10.5761 9.38269C10.5004 9.19997 10.4806 8.9989 10.5192 8.80492C10.5578 8.61094 10.653 8.43275 10.7929 8.2929C10.9327 8.15305 11.1109 8.05781 11.3049 8.01922C11.4989 7.98064 11.7 8.00044 11.8827 8.07613C12.0654 8.15182 12.2216 8.27999 12.3315 8.44444C12.4414 8.60889 12.5 8.80223 12.5 9.00001C12.5 9.26522 12.3946 9.51958 12.2071 9.70711C12.0196 9.89465 11.7652 10 11.5 10Z"
      fill="currentColor"
    />
    <path
      d="M1 8.10938V5C1 4.32281 1.375 3.1875 2.67656 2.94156C3.78125 2.73437 4.875 2.73438 4.875 2.73438C4.875 2.73438 5.59375 3.23438 5 3.23438C4.40625 3.23438 4.42188 4 5 4C5.57812 4 5 4.73438 5 4.73438L2.67188 7.375L1 8.10938Z"
      fill="currentColor"
    />
  </svg>
);

const WalletConnect = () => {
  const theme = useTheme();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<string | null>(null);
  const {
    status,
    //network,
    wallets,
    //availableConnectTypes,
    //availableInstallTypes,
    availableConnections,
    //supportFeatures,
    connect,
    disconnect
  } = useWallet();

  useEffect(() => {
    if (status !== WalletStatus.INITIALIZING) {
      setOpen(false);
    }
  }, [status]);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setCopied(null);
  };

  const isInitializing = status === WalletStatus.INITIALIZING;
  const isConnected =
    !isInitializing && status === WalletStatus.WALLET_CONNECTED;

  return (
    <>
      <Box>
        <LoadingButton
          ref={ref}
          onClick={handleOpen}
          startIcon={<TerraConnectIcon />}
          loading={isInitializing}
          loadingPosition="start"
          color="secondary"
          variant={isConnected ? 'outlined' : 'contained'}
          size="small"
          sx={{
            fontWeight: 'normal'
          }}
        >
          {isConnected
            ? stringMiddleTruncate(wallets[0].terraAddress, 24)
            : 'Connect to Terra Station'}
        </LoadingButton>
      </Box>

      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        transitionDuration={{
          enter: 0,
          exit: 0
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Box
          sx={{
            maxWidth: 280
          }}
          p={3}
        >
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            sx={{
              color: theme.colors.alpha.trueWhite[100],
              fontSize: theme.typography.pxToRem(18),
              mb: 1
            }}
          >
            {isConnected
              ? stringMiddleTruncate(wallets[0].terraAddress, 23)
              : 'Connect your wallet'}
          </Typography>
          {isConnected ? (
            <>
              {navigator && navigator.clipboard && (
                <Button
                  color={!copied ? 'secondary' : (copied === 'SUCCESS' ? 'success' : 'error')}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    mt: 2
                  }}
                  onClick={() =>
                    navigator.clipboard.writeText(wallets[0].terraAddress).then(
                      () =>  setCopied('SUCCESS'),
                      () => setCopied('FAIL')
                    )
                  }
                >
                  {`Copy wallet address`}
                </Button>
              )}

              <Button
                href={`https://finder.terra.money/columbus-5/address/${wallets[0].terraAddress}`}
                target="_blank"
                rel="noopener"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  mt: 2
                }}
              >
                {`View on terra finder`}
              </Button>

              <Button
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  mt: 2
                }}
                onClick={() => disconnect()}
              >
                {`Disconnect Wallet`}
              </Button>
            </>
          ) : (
            availableConnections.map(
              ({ type, name, icon, identifier = '' }) =>
                type !== ConnectType.READONLY && (
                  <Button
                    color="secondary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    key={'connection-' + type + identifier}
                    onClick={() => connect(type, identifier)}
                    sx={{
                      mt: 2,
                      pl: '18px'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        pl: 2,
                        left: 0,
                        top: 0,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Avatar src={icon} sx={{ width: 18, height: 18 }} />
                    </Box>
                    {name}
                  </Button>
                )
            )
          )}
        </Box>
      </Popover>
    </>
  );
};

export default WalletConnect;

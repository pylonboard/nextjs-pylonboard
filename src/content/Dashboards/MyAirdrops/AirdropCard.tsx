import {
  Card,
  CardActionArea,
} from '@mui/material';
import Decimal from 'decimal.js';
import { useEffect, useState } from 'react';
import AirdropCardHeader, { AirdropCardHeaderProps } from '@/content/Dashboards/MyAirdrops/AirdropCardHeader';
import AirdropCardContent from '@/content/Dashboards/MyAirdrops/AirdropCardContent';

type AirdropCardProps = {
  walletAddress: string;
  header: AirdropCardHeaderProps;
  denominator: string;
  amount: number;
  amountInUstAtClaim: number;
};

export const AirdropCard = ({
  header: {
    logo,
    title
  },
  walletAddress,
  ...contentProps
}: AirdropCardProps) => {
  const [rewards, setRewards] = useState(0);
  const [rewardsInUst, setRewardsInUst] = useState(0);
  const [rewardsError, setRewardsError] = useState('');
  const [loadingRewards, setLoadingRewards] = useState(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setOpen(true);
  };

  const handleCloseModal = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardActionArea
          onClick={handleOpenModal}
          sx={{ px: 2, py: 3 }}
          disableRipple
        >
          <AirdropCardHeader title={title} logo={logo} />
          <AirdropCardContent
            rewards={rewards}
            rewardsInUst={rewardsInUst}
            loading={loadingRewards}
            error={rewardsError}
            {...contentProps}          />
        </CardActionArea>
      </Card>
      {/*<GatewayPoolDetails*/}
      {/*  title={title}*/}
      {/*  logo={logo}*/}
      {/*  handleClose={handleCloseModal}*/}
      {/*  isOpen={isOpen}*/}
      {/*  terraWallet={walletAddress}*/}
      {/*  poolContractId={poolContractId}*/}
      {/*/>*/}
    </>
  );
};

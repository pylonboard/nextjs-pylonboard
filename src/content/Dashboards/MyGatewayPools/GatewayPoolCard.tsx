import {
  Card,
  CardActionArea,
} from '@mui/material';
import Decimal from 'decimal.js';
import { useEffect, useState } from 'react';
import GatewayPoolDetails from '@/content/Dashboards/MyGatewayPools/GatewayPoolDetails';
import GatewayPoolCardHeader, { GatewayPoolCardHeaderProps } from '@/content/Dashboards/MyGatewayPools/GatewayPoolCardHeader';
import GatewayPoolCardContent from '@/content/Dashboards/MyGatewayPools/GatewayPoolCardContent';
import { StepperProgressType } from '@/components/StepperProgress';

type GatewayPoolCardProps = {
  walletAddress: string;
  poolContractId: string;
  header: GatewayPoolCardHeaderProps;
  rewardDenominator: string;
  rewardUAmountDivisor: number;
  totalDepositAmount: number;
  rewardsUrl: string;
  totalClaimedAmount: number;
  totalClaimedAmountInUst: number;
  claimedAmountToUstMultiplier: number;
  poolProgress: StepperProgressType;
};

export const GatewayPoolCard = ({
  header: {
    logo,
    title
  },
  walletAddress,
  poolContractId,
  rewardUAmountDivisor,
  rewardsUrl,
  claimedAmountToUstMultiplier,
  poolProgress,
  ...contentProps
}: GatewayPoolCardProps) => {
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

  useEffect(() => {
    if (rewardsUrl) {
      setLoadingRewards(true);
      fetch(rewardsUrl)
        .then((res) => res.json())
        .then(({ result, error }) => {
          if (result) {
            const totalRewards = new Decimal(result.amount)
              .div(rewardUAmountDivisor)
              .toNumber();
            setRewards(totalRewards);
            setRewardsInUst(totalRewards * claimedAmountToUstMultiplier);
          } else if (error) {
            setRewardsError('Error fetching data');
          }
        })
        .finally(() => {
          setLoadingRewards(false);
        });
    }
  }, []);

  return (
    <>
      <Card>
        <CardActionArea
          onClick={handleOpenModal}
          sx={{ px: 2, py: 3 }}
          disableRipple
        >
          <GatewayPoolCardHeader title={title} logo={logo} />
          <GatewayPoolCardContent
            rewards={rewards}
            rewardsInUst={rewardsInUst}
            poolProgress={poolProgress}
            loading={loadingRewards}
            error={rewardsError}
            {...contentProps}          />
        </CardActionArea>
      </Card>
      <GatewayPoolDetails
        title={title}
        logo={logo}
        handleClose={handleCloseModal}
        isOpen={isOpen}
        terraWallet={walletAddress}
        poolContractId={poolContractId}
      />
    </>
  );
};

import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';
import numeral from 'numeral';
import { amountFormatter } from '@/utils/numberFormatters';

interface AirdropCardContentProps {
  rewardDenominator: string;
  rewardsInUst: number;
  totalDepositAmount: number;
  rewards: number;
  totalClaimedAmount: number;
  totalClaimedAmountInUst: number;
  loading: boolean;
  error: string;
}

const AirdropCardContent = ({
  rewards,
  rewardsInUst,
  rewardDenominator,
  totalDepositAmount,
  totalClaimedAmount,
  totalClaimedAmountInUst,
  loading,
  error
}: AirdropCardContentProps) => {
  return (
    <Stack
      sx={{ mt: 1.5 }}
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={0}
    >
      <Box py={1}>
        <Typography variant="subtitle2">{'Deposits'}</Typography>
        <Typography variant="h3">
          {numeral(totalDepositAmount).format('0,000.[00]')} UST
        </Typography>
        <Typography variant="subtitle1">
          {numeral(totalDepositAmount).format('$0,000.[0000]')}
        </Typography>
      </Box>

      <Box py={1}>
        <Typography variant="subtitle2">{'Pending rewards'}</Typography>
        {!loading && error ? (
          <Typography variant="h3" color="error">
            {error}
          </Typography>
        ) : (
          <>
            <Typography variant="h3">
              {loading ? (
                <Skeleton />
              ) : (
                `${amountFormatter(rewards)} ${rewardDenominator}`
              )}
            </Typography>
            <Typography variant="subtitle1" sx={{ display: 'inline-block' }}>
              {loading ? (
                <Skeleton />
              ) : (
                numeral(rewardsInUst).format('$0,000.[0000]')
              )}
            </Typography>
          </>
        )}
      </Box>

      <Box py={1}>
        <Typography variant="subtitle2">{'Claimed rewards'}</Typography>
        <Typography variant="h3">
          {`${amountFormatter(totalClaimedAmount)} ${rewardDenominator}`}
        </Typography>
        <Typography variant="subtitle1">
          {numeral(totalClaimedAmountInUst).format('$0,000.[0000]')}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AirdropCardContent;

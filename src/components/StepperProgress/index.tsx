import * as React from 'react';
import { styled } from '@mui/material/styles';

import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
  useTheme
} from '@mui/material';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 3px;
        border-radius: ${theme.general.borderRadiusLg};
        &.${linearProgressClasses.colorPrimary} {
            background-color: ${theme.palette.grey[800]};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background-color: ${theme.palette.grey[800]};
    width: ${theme.spacing(1)};
    height: ${theme.spacing(1)};
  `
);

const today = new Date();

const StepperProgress = ({ startedAt, rewardsClaimableAt, poolEndsAt }) => {
  const theme = useTheme();

  const totalDays = Math.floor(
    (new Date(poolEndsAt).valueOf() - new Date(startedAt).valueOf()) /
      (1000 * 60 * 60 * 24)
  );
  const untilToday = Math.floor(
    (today.valueOf() - new Date(startedAt).valueOf()) / (1000 * 60 * 60 * 24)
  );
  const claimable = Math.floor(
    (new Date(rewardsClaimableAt).valueOf() - new Date(startedAt).valueOf()) /
      (1000 * 60 * 60 * 24)
  );
  const progress = (untilToday / totalDays) * 100;
  const claimablePosition = (claimable / totalDays) * 100;

  return (
    <Box sx={{ pt: 3 }}>
      <Box position="relative">
        <LinearProgressPrimary
          variant="determinate"
          value={Math.min(progress, 100)}
        />
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            top: 0,
            height: '100%',
            left: 0,
            transform: 'translateX(-50%)'
          }}
        >
          <DotLegend
            style={{
              backgroundColor:
                progress >= 0
                  ? theme.colors.primary.main
                  : theme.palette.grey[800]
            }}
          />
        </Box>
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            top: 0,
            height: '100%',
            left: claimablePosition + '%',
            transform: 'translateX(-50%)'
          }}
        >
          <DotLegend
            style={{
              backgroundColor:
                untilToday >= claimable
                  ? theme.colors.primary.main
                  : theme.palette.grey[800]
            }}
          />
        </Box>
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            top: 0,
            height: '100%',
            left: '100%',
            transform: 'translateX(-50%)'
          }}
        >
          <DotLegend
            style={{
              backgroundColor:
                progress >= 100
                  ? theme.colors.primary.main
                  : theme.palette.grey[800]
            }}
          />
        </Box>
      </Box>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt={1}
      >
        <Typography
          sx={{
            color: theme.colors.alpha.black[50],
            fontSize: theme.typography.pxToRem(12)
          }}
          variant="subtitle2"
        >
          {`Launched at `}
          <span style={{ whiteSpace: 'nowrap' }}>
            {new Intl.DateTimeFormat('default', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }).format(new Date(startedAt))}
          </span>
        </Typography>
        <Typography
          sx={{
            textAlign: 'right',
            color: theme.colors.alpha.black[50],
            fontSize: theme.typography.pxToRem(12)
          }}
          variant="subtitle2"
        >
          {`Distributed until `}
          <span style={{ whiteSpace: 'nowrap' }}>
            {new Intl.DateTimeFormat('default', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }).format(new Date(poolEndsAt))}
          </span>
        </Typography>

        <Typography
          sx={{
            position: 'absolute',
            bottom: '100%',
            left: claimablePosition + '%',
            height: '100%',
            color: `${theme.colors.alpha.black[50]}`,
            fontSize: theme.typography.pxToRem(12)
          }}
          variant="subtitle2"
        >
          {`Claimable from `}
          <span style={{ whiteSpace: 'nowrap' }}>
            {new Intl.DateTimeFormat('default', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }).format(new Date(rewardsClaimableAt))}
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default StepperProgress;

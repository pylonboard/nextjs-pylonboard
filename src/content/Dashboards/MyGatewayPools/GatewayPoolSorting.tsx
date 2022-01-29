import { GatewayPoolsSortBy } from '@/enums/gatewayPools';
import { useRef, useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

const GatewayPoolSorting = ({ sortBy, setSortBy }) => {
  const sortingFilters = [
    {
      value: GatewayPoolsSortBy['ALPHABETICAL'],
      text: 'Alphabetical'
    },
    {
      value: GatewayPoolsSortBy['CLAIM_AT'],
      text: 'Claimable Date'
    }
  ];

  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const actionRef1 = useRef<any>(null);

  return (
    <Box mt={{ xs: 3, md: 0 }}>
      <Button
        variant="outlined"
        ref={actionRef1}
        onClick={() => setOpenMenuPeriod(true)}
        sx={{
          mr: 1
        }}
        endIcon={<SortIcon fontSize="small" />}
      >
        {sortingFilters.find(({ value }) => value === sortBy).text}
      </Button>
      <Menu
        disableScrollLock
        anchorEl={actionRef1.current}
        onClose={() => setOpenMenuPeriod(false)}
        open={openPeriod}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {sortingFilters.map((_sortBy) => (
          <MenuItem
            key={_sortBy.value}
            onClick={() => {
              setSortBy(_sortBy.value);
              setOpenMenuPeriod(false);
            }}
          >
            {_sortBy.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GatewayPoolSorting;

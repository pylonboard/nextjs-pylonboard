import type { ReactNode } from 'react';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'General',
    items: [
      {
        name: 'Dashboards',
        icon: DashboardRoundedIcon,
        link: '/dashboards',
        items: [
          {
            name: 'Staking',
            link: '/dashboards/staking',
            badge: '',
            badgeTooltip: 'Pylon MINE Staking'
          },
          {
            name: 'Stake Percentiles',
            link: '/dashboards/metrics',
            badge: '',
            badgeTooltip: 'Pylon MINE Metrics'
          },
          {
            name: 'Buy Back Distribution',
            link: '/dashboards/buy-back-distribution',
            badge: '',
            badgeTooltip: 'Pylon MINE Buy Back Distribution'
          },
          {
            name: 'Biggest Mine wallets',
            link: '/dashboards/wallet-amounts',
            badge: '',
            badgeTooltip: 'Pylon MINE Wallet amounts'
          },
          {
            name: 'Gateway Pools',
            link: '/dashboards/gateway-pools',
            badge: '',
            badgeTooltip: 'Pylon Gateway Pools'
          }
        ]
      }
    ]
  }
];

export default menuItems;

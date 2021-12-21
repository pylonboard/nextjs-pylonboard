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
            name: 'Metrics',
            link: '/dashboards/metrics',
            badge: '',
            badgeTooltip: 'Pylon MINE Metrics'
          },
          {
            name: 'Wallets',
            link: '/dashboards/wallet-amounts',
            badge: '',
            badgeTooltip: 'Pylon MINE Wallet amounts'
          },
          {
            name: 'Gateway Pools',
            link: '/dashboards/gateway-pools',
            badge: '',
            badgeTooltip: 'Pylon Gateway Pools'
          },
          {
            name: 'Products',
            link: '/dashboards/products',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Statistics',
            link: '/dashboards/statistics',
            badge: '',
            badgeTooltip: 'Statistics Dashboard - version 3.0'
          },
          {
            name: 'Automation',
            link: '/dashboards/automation'
          },
          {
            name: 'Analytics',
            link: '/dashboards/analytics'
          },
          {
            name: 'Banking',
            link: '/dashboards/banking'
          },
          {
            name: 'Commerce',
            link: '/dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: '/dashboards/crypto'
          },
          {
            name: 'Finance',
            link: '/dashboards/finance'
          },
          {
            name: 'Fitness',
            link: '/dashboards/fitness'
          }
        ]
      }
    ]
  }
];

export default menuItems;

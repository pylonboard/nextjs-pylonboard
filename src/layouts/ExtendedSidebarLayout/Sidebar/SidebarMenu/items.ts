import type { ReactNode } from 'react';

import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

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
        icon: SmartToyTwoToneIcon,
        link: '/dashboards',
        items: [
          {
            name: 'Total Mine Staked',
            link: '/dashboards/staking',
          },
          {
            name: 'Reports',
            link: '/dashboards/reports',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Expenses',
            link: '/dashboards/expenses',
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0'
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

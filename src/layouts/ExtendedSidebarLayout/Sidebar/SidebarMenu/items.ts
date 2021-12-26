import type { ReactNode } from 'react';
import pools from '@/content/DashboardPages/gateway-pools/pools';

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
        name: 'MINE Dashboards',
        link: '/dashboards',
        items: [
          {
            name: 'Staking',
            link: '/dashboards/staking',
            badge: '',
            badgeTooltip: 'Pylon MINE staking'
          },
          {
            name: 'Stake Percentiles',
            link: '/dashboards/metrics',
            badge: '',
            badgeTooltip: 'Pylon MINE staking percentiles'
          },
          {
            name: 'Buyback Distribution',
            link: '/dashboards/buy-back-distribution',
            badge: '',
            badgeTooltip: 'Pylon MINE buyback distribution'
          },
          {
            name: 'Biggest Mine wallets',
            link: '/dashboards/wallet-amounts',
            badge: '',
            badgeTooltip: 'Pylon MINE wallet stake amounts'
          }
        ]
      }, {
        name: 'Gateway Pools',
        link: '/dashboards/gateway-pools',
        items: pools.map(({ value, text }) => ({
          name: text,
          link: `/dashboards/gateway-pools?gwp=${value}`,
          badge: '',
          badgeTooltip: `${text} gateway pool`
        }))
      }
    ]
  }
];

export default menuItems;

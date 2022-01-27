import type { ReactNode } from 'react';
import pools from '@/content/DashboardPages/gateway-pools/pools';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;
  disabled?: boolean;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Personal',
    items: [
      {
        name: 'My Gateway Pools',
        link: '/dashboards/my-gateway-pools',
      },
      {
        name: 'Airdrops (coming soon)',
        link: '',
        disabled: true,
      },
    ]
  },
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
      },
      {
        name: 'Gateway Pools',
        link: '/dashboards/gateway-pools',
        items: [{
          name: 'Overview',
          link: `/dashboards/gateway-pools-overview`,
        }, ...pools.map(({ value, text }) => ({
          name: text,
          link: `/dashboards/gateway-pools?gwp=${value}`,
          badge: '',
          badgeTooltip: `${text} gateway pool`
        }))]
      },
      {
        name: 'Arbitrage',
        link: '/arbitrage',
        items: [
          {
            name: 'Nexus Liquid',
            link: '/arbitrage/nexus-liquid',
            badge: '',
            badgeTooltip: 'Nexus Liquid bPsiDP-24m token arbitrage'
          },
        ]
      }
    ]
  }
];

export default menuItems;

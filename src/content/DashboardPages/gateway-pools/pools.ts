import { GatewayPoolsEnum } from '@/enums/gatewayPools';

interface Pool {
  value: string;
  text: string;
  logo: string;
}

const pools: Pool[] = [
  {
    value: GatewayPoolsEnum['XDEFI'],
    text: 'Xdefi',
    logo: '/static/images/pools/xdefi.png',
  },
  {
    value: GatewayPoolsEnum['SAYVE'],
    text: 'Sayve',
    logo: '/static/images/pools/sayve.png',
  },
  {
    value: GatewayPoolsEnum['GLOW'],
    text: 'Glow',
    logo: '/static/images/pools/glow.png',
  },
  {
    value: GatewayPoolsEnum['NEXUS'],
    text: 'Nexus',
    logo: '/static/images/pools/nexus.png',
  },
  {
    value: GatewayPoolsEnum['WHITE_WHALE'],
    text: 'White Whale',
    logo: '/static/images/pools/white_whale.png',
  },
  {
    value: GatewayPoolsEnum['DEVIANTS_FACTIONS'],
    text: 'Deviants Factions',
    logo: '/static/images/pools/deviants_factions.png',
  },
  {
    value: GatewayPoolsEnum['ORION'],
    text: 'Orion',
    logo: '/static/images/pools/orion.png',
  },
  {
    value: GatewayPoolsEnum['GALACTIC_PUNKS'],
    text:'Galactic Punks',
    logo: '/static/images/pools/galactic_punks.png',
  },
  {
    value: GatewayPoolsEnum['VALKYRIE'],
    text: 'Valkyrie',
    logo: '/static/images/pools/valkyrie.png',
  },
  {
    value: GatewayPoolsEnum['TERRA_WORLD'],
    text: 'Terra World',
    logo: '/static/images/pools/twd.png',
  },
  {
    value: GatewayPoolsEnum['LOOP'],
    text: 'Loop',
    logo: '/static/images/pools/loop.png',
  },
  {
    value: GatewayPoolsEnum['MINE'],
    text: 'MINE',
    logo: '/static/images/pools/mine.png',
  },
];

export const poolsByIdentifier = pools.reduce(
  (obj, item) => ({
    ...obj,
    [item.value]: { title: item.text, logo: item.logo }
  }),
  {}
);

export default pools;

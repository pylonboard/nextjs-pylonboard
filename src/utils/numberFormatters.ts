import numeral from 'numeral';

export const amountFormatter = (value: number) =>
  numeral(value).format('0a.[00]').toUpperCase()

export const percentileFormatter = (value: number) =>
  new Intl.NumberFormat('default', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(value)

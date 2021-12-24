export const amountFormatter = (value: number) =>
  new Intl.NumberFormat('default', {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,

  }).format(value)

export const percentileFormatter = (value: number) =>
  new Intl.NumberFormat('default', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(value)

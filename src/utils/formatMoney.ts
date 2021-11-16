const moneyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
});

export const formatMoney = (value: number): string =>
  moneyFormatter.format(value);

const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "PHP",
  style: "currency",
});

export const formatCurrency = (priceTag: number) => {
  return currencyFormatter.format(priceTag);
};
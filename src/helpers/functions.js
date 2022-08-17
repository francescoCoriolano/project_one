export const filterItems = (products, quantity) => {
  products?.sort((a, b) => b.rating.rate - a.rating.rate).splice(0, quantity);
};

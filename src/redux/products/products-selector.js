import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectIsProductsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsProductsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.products
);

import { createSelector } from 'reselect';

import { RootState } from '../store';
import { PurchasedItemsState } from './purchased-items.reducer';

const selectPurchasedItemsReducer = (state: RootState): PurchasedItemsState =>
  state.purchasedItems;

export const selectPurchasedItems = createSelector(
  [selectPurchasedItemsReducer],
  (items) => items.purchasedItems,
);

export const selectPurchasedItemsCount = createSelector(
  [selectPurchasedItems],
  (purchasedItems) =>
    purchasedItems.reduce(
      (total, purchasedItem) => total + purchasedItem.quantity,
      0,
    ),
);

export const selectPurchasedItemsTotal = createSelector(
  [selectPurchasedItems],
  (purchasedItems) =>
    purchasedItems.reduce(
      (total, purchasedItem) =>
        total + purchasedItem.quantity * purchasedItem.price,
      0,
    ),
);

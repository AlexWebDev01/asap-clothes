import { AnyAction } from 'redux';

import { PurchasedItem } from './purchased-items.types';
import { setPurchasedItems } from './purchased-items.action';

export type PurchasedItemsState = {
  readonly purchasedItems: PurchasedItem[];
};

const PURCHASED_ITEMS_INITIAL_STATE: PurchasedItemsState = {
  purchasedItems: [],
};

export const purchasedItemsReducer = (
  state = PURCHASED_ITEMS_INITIAL_STATE,
  action: AnyAction,
): PurchasedItemsState => {
  if (setPurchasedItems.match(action)) {
    return {
      ...state,
      purchasedItems: action.payload,
    };
  }

  return state;
};

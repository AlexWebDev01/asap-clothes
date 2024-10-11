import {
  PURCHASED_ITEMS_ACTION_TYPES,
  PurchasedItem,
} from './purchased-items.types';
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

const addItems = (purchasedItems: PurchasedItem[]): PurchasedItem[] =>
  purchasedItems;

export type SetPurchasedItems = ActionWithPayload<
  PURCHASED_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
  PurchasedItem[]
>;

export const setPurchasedItems = withMatcher(
  (cartItems: PurchasedItem[]): SetPurchasedItems =>
    createAction(PURCHASED_ITEMS_ACTION_TYPES.SET_CART_ITEMS, cartItems),
);

export const addPurchasedItems = (purchasedItems: PurchasedItem[]) => {
  const newPurchasedItems = addItems(purchasedItems);
  return setPurchasedItems(newPurchasedItems);
};

export const clearPurchasedItems = () => setPurchasedItems([]);

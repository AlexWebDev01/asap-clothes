import { CartItem } from '../cart/cart.types';

export enum PURCHASED_ITEMS_ACTION_TYPES {
  SET_CART_ITEMS = 'purchasedItems/SET_PURCHASED_ITEMS',
}

export type PurchasedItem = CartItem;

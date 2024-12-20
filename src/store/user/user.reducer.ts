import { AnyAction } from 'redux';

import { UserData } from '../../utils/firebase/firebase.utils';
import { USER_ACTION_TYPES } from './user.types';
import { Order } from '../../components/purchase/purchase.interface';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly purchaseHistory: Order[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  purchaseHistory: [],
  isLoading: true,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction,
): UserState => {
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_UP_START:
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.FETCH_PURCHASE_HISTORY_START:
      return { ...state, isLoading: true, error: null };

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };

    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.FETCH_PURCHASE_HISTORY_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    case USER_ACTION_TYPES.CHECK_USER_SESSION:
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.FETCH_PURCHASE_HISTORY_SUCCESS:
      return { ...state, purchaseHistory: action.payload, isLoading: false };

    default:
      return state;
  }
};

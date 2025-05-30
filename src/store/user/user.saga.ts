import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { User } from 'firebase/auth';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
  fetchPurchaseHistorySuccess,
  fetchPurchaseHistoryFailure,
} from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
  UserData,
  getCurrentUserPurchaseHistory,
} from '../../utils/firebase/firebase.utils';

import { DocumentSnapshot } from 'firebase/firestore';
import { SagaIterator } from 'redux-saga';
import { Order } from '../../components/purchase/purchase.interface';
import { selectCurrentUser } from './user.selector';

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additinalDetails?: AdditionalInformation,
): SagaIterator {
  try {
    const userSnapshot: DocumentSnapshot<UserData> = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additinalDetails,
    );

    if (userSnapshot) {
      const userData = userSnapshot.data();
      if (userData) {
        yield put(
          signInSuccess({ id: userSnapshot.id, ...userData } as UserData & {
            id: string;
          }),
        );
      } else {
        throw new Error('User data is undefined');
      }
    }
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
EmailSignInStart): Generator<any, void, any> {
  try {
    const userCredential = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password,
    );

    if (userCredential) {
      const { user } = userCredential;
      yield call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* isUserAuthenticated(): Generator<any, void, User | null> {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
SignUpStart): Generator<any, void, any> {
  try {
    const userCredential = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
    );
    if (userCredential) {
      const { user } = userCredential;
      yield put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails },
}: SignUpSuccess) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

function* fetchPurchaseHistory() {
  try {
    const currentUser: UserData | null = yield select(selectCurrentUser);

    if (!currentUser) return;

    const purchaseHistory: Order[] = yield call(
      getCurrentUserPurchaseHistory,
      currentUser,
    );
    yield put(fetchPurchaseHistorySuccess(purchaseHistory));
  } catch (error) {
    yield put(fetchPurchaseHistoryFailure(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignInSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS, fetchPurchaseHistory);
}

export function* onPaymentSuccess() {
  yield takeLatest(USER_ACTION_TYPES.PAYMENT_SUCCESS, fetchPurchaseHistory);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onSignInSuccess),
    call(onPaymentSuccess),
  ]);
}

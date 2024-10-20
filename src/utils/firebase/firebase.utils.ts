import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
  addDoc,
  where,
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';
import { UUID } from 'crypto';
import { PurchasedItem } from '../../store/purchased-items/purchased-items.types';
import { Order } from '../../components/purchase/purchase.interface';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'asap-clothes.firebaseapp.com',
  projectId: 'asap-clothes',
  storageBucket: 'asap-clothes.appspot.com',
  messagingSenderId: '646213844758',
  appId: '1:646213844758:web:bf0af4e05d170c098eda37',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const dataBase = getFirestore();

export type ObjectsToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(dataBase, collectionKey);
  const batch = writeBatch(dataBase);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(dataBase, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category,
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  uuid: UUID;
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) throw new Error('No user authentication object provided');

  const userDocRef = doc(dataBase, 'users', userAuth.uid);
  let userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toUTCString();

    try {
      await setDoc(userDocRef, {
        uuid: crypto.randomUUID(),
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });

      userSnapshot = await getDoc(userDocRef);
    } catch (error) {
      console.log('Error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject,
    );
  });
};

export const createUserPurchaseDocument = async (
  user: UserData | null,
  purchase: PurchasedItem[],
  purchaseTotal: number,
) => {
  try {
    const purchasesCollectionRef = collection(dataBase, 'purchases');

    await addDoc(purchasesCollectionRef, {
      userUuid: user?.uuid ?? null,
      purchase,
      purchaseTotal,
      createdAt: new Date().toUTCString(),
    });

    console.log('User purchase document created');
  } catch (error) {
    console.log('Error creating user purchase document', error);
  }
};

export const getCurrentUserPurchaseHistory = async (
  currentUser: UserData,
): Promise<Order[]> => {
  if (!currentUser) return [];

  const purchasesCollectionRef = collection(dataBase, 'purchases');
  const q = query(
    purchasesCollectionRef,
    where('userUuid', '==', currentUser.uuid),
  );
  const querySnapshot = await getDocs(q);

  const purchaseHistory = querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Order,
  );

  const sortedPurchaseHistory = purchaseHistory.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return sortedPurchaseHistory;
};

export const SIGN_IN_ERROR_MESSAGES = Object.freeze({
  'auth/user-not-found': 'Provided email is not registered',
  'auth/wrong-password': 'Provided credentials are invalid',
});

export const SIGN_UP_ERROR_MESSAGES = Object.freeze({
  'auth/email-already-in-use': 'Provided email is already in use',
  'auth/weak-password': 'Password should be at least 6 characters long',
  'auth/passwords-dont-match': 'Passwords do not match',
});

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKv_NA__han2rte4vLsbgXNfI7UAfNmfA",
    authDomain: "asap-clothes.firebaseapp.com",
    projectId: "asap-clothes",
    storageBucket: "asap-clothes.appspot.com",
    messagingSenderId: "646213844758",
    appId: "1:646213844758:web:bf0af4e05d170c098eda37"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const dataBase = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(dataBase, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

   return userDocRef;
}
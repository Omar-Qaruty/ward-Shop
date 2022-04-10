import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk8aZb1DzKGZNjs7sZOkSVkV2OaL7GRVw",
  authDomain: "ward-ecommerce.firebaseapp.com",
  projectId: "ward-ecommerce",
  storageBucket: "ward-ecommerce.appspot.com",
  messagingSenderId: "516761190819",
  appId: "1:516761190819:web:863ce0da731f945232da16",
  measurementId: "G-GP260LT0SF",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const singInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirct = () =>
//   signInWithRedirect(auth, googleProvider);

const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additonalData = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { name, email } = userAuth;
    const createdTime = new Date();

    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdTime,
        ...additonalData,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }

    return userDocRef;
  }
};

export const createAuteUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuteUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

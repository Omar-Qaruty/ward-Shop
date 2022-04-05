import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdTime = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdTime,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }

    return userDocRef;
  }
};

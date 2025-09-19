import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-db-c6c13.firebaseapp.com",
  projectId: "crwn-clothing-db-c6c13",
  storageBucket: "crwn-clothing-db-c6c13.firebasestorage.app",
  messagingSenderId: "871825555483",
  appId: "1:871825555483:web:63271aa8eac66240adb8be",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const signInUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);
  const doesUserExist = userSnapshot.exists();
  console.log(doesUserExist);
};

export const authProvider = new GoogleAuthProvider();
export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);

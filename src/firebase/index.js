import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-db-c6c13.firebaseapp.com",
  projectId: "crwn-clothing-db-c6c13",
  storageBucket: "crwn-clothing-db-c6c13.firebasestorage.app",
  messagingSenderId: "871825555483",
  appId: "1:871825555483:web:63271aa8eac66240adb8be",
};

export const firebaseApp = initializeApp(firebaseConfig);

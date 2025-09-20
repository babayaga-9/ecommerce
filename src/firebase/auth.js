import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "./index";

export const auth = getAuth(firebaseApp);

const gAuthProvider = new GoogleAuthProvider();

gAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, gAuthProvider);

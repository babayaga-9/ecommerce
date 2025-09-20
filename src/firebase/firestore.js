import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from "./";

export const firestoreDB = getFirestore(firebaseApp);

export const signInUser = async (user) => {
  const userDocRef = doc(firestoreDB, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);
  const userDocExists = userSnapshot.exists();
  console.log(userDocExists);
};

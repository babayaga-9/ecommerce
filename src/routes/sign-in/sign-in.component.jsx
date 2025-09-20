import { signInWithGooglePopup } from "../../firebase/auth";
import { signInUser } from "../../firebase/firestore";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const data = await signInWithGooglePopup();
    await signInUser(data.user);
    // data.user which has all the necessary info (accessToken, gmail data about me, and uid)
    // we can use uid as sort of unique id to store user
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogle}>sign in google popup</button>
    </div>
  );
};

export default SignIn;

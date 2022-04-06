// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  singInWithGooglePopup,
  signInWithGoogleRedirct,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // in case you want to use redirect sign in
  // sign in with redirect goes to a diffrent route
  // all the functinaltiy after signInWithRedirect will stop (because it goes to another route)
  // when the user gets redirected from google's sign in page to the app sign in component will be unmounted
  // the inital mount will return null
  // useEffect will run the code when the component remounts because of the []
  // useEffect(() => {
  //   const redirectAndCreateUser = async () => {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocFromAuth(response.user);
  //     }
  //   };

  //   redirectAndCreateUser();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sing in with GooglePopup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirct}>
        Sing in with GoogleRedirect
      </button> */}
    </div>
  );
};

export default SignIn;

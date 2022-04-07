// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in-form /sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Auth = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirct}>
        Sign in with GoogleRedirect
      </button> */}
    </div>
  );
};

export default Auth;

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

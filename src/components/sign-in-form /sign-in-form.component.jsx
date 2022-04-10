import { useState, useContext } from "react";
import { createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";

import "./sign-in-styles.scss";
import Button from "../button/button.component";

import {
  auth,
  singInWithGooglePopup,
  signInAuteUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await singInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuteUserWithEmailAndPassword(email, password);
      setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>already have an account?</h2>
      <span> sign in </span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FromInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

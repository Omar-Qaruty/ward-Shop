import { useState, useContext } from "react";
import {
  createAuteUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/form-input.component";
import "./sign-up-styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // confirm the 2 passwords matches.
    if (password !== confirmPassword) {
      alert("passwords must confirm");
    }
    try {
      const { user } = await createAuteUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      await createUserDocFromAuth(user, { name });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user , email is already in use");
      } else {
        console.log("user creation encounterd an error", error);
      }
    }
    // see if the 2 passwords do matches.
    // create a user doc
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> sign up </span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label="name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />

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

        <FromInput
          label="confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

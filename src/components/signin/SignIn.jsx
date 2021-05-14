import React, { useState } from "react";
import "../../App.scss";
import { connect } from "react-redux";
import FormInput from "../Form-Input/Form-Input";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          type="email"
          label="email"
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <button type="submit">Sign in</button>
          <button
            type="button"
            onClick={googleSignInStart}
          >
            Sign in with google
          </button>

        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

import React, { useState } from "react";
// import { connect } from "react-redux";
// import CustomButton from "../custom-button/CustomButton";
import FormInput from '../Form-Input/Form-Input'
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from "../../redux/user/user-actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
//   const [userCredentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // emailSignInStart(email, password);
    console.log('hei')
  };

  const handleChange = (e) => {
    // const { value, name } = e.target;

    // setCredentials({ ...userCredentials, [name]: value });
    console.log('xd')
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
        //   value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
        //   value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          {/* <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton> */}
          <button>

          </button>
        </div>
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) =>
//     dispatch(emailSignInStart({ email, password })),
// });

export default SignIn;
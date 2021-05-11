import React from "react";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/SignUp/SignUp";


export default function signInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
}
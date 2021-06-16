import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import '../../App.scss';

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

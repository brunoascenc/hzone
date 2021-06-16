import React, { useState } from 'react';
import '../../App.scss';
import { connect } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user-actions';

const SignIn = ({ emailSignInStart, googleSignInStart, signInFailure }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
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
      <h2>Eu já tenho uma conta</h2>
      <span>Entre com o seu email e senha</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          type="email"
          placeholder="email"
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="senha"
          value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <button type="submit">Entrar</button>
          <button
            type="button"
            onClick={googleSignInStart}
            className="google-btn"
          >
            Entrar com o google
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

import React, { useState } from "react";
import "../../App.scss";
import { connect } from "react-redux";
import Modal from "react-modal";
import { VscClose } from "react-icons/vsc";
import FormInput from "../Form-Input/Form-Input";
import { signUpStart } from "../../redux/user/user-actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }


  const { displayName, email, password, confirmPassword } = userCredentials;


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      openModal();
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <Modal
        closeTimeoutMS={200}
        className="modal"
        isOpen={modalIsOpen}
        ariaHideApp={false}
      >
        <div className="modal-content signup-modal">
        <button onClick={closeModal}>
              <VscClose />    
      </button>
          <h1>As senhas devem ser iguais</h1>
        </div>
      </Modal>
      <h2>Eu não tenho uma conta</h2>
      <span>Cadastre-se com seu email e senha</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          placeholder="Seu Nome"
          required
        ></FormInput>

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Seu Email"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Senha"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Senha"
          required
        ></FormInput>

        <button type="submit"> Cadastrar </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

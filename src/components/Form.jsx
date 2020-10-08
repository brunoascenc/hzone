import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../App.css";
import FormErrors from "./FormErrors";
import Modal from "react-modal";
import { VscClose } from "react-icons/vsc";

//Yup validation
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome muito pequeno")
    .max(100, "Maximo de 100 characteres")
    .required("Escreva um nome"),
  email: Yup.string()
    .email("Escreva um email válido")
    .max(100, "Maximo de 100 characteres")
    .required("Escreva um email"),
  message: Yup.string()
    .min(30, "Minimo de 30 characters")
    .required("Escreva uma mensagem"),
});

export default function Form() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          openModal();
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Modal
            closeTimeoutMS={200}
            className="modal"
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
          >
            <div className="modal-content">
              <button onClick={closeModal}>
                <VscClose />
              </button>
              <h1>Mensagem enviada com sucesso</h1>
            </div>
          </Modal>
          <div className="input">
            <input
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              type="text"
              name="name"
              placeholder="Seu nome..."
              className={touched.name && errors.name ? "has-error" : null}
            />
            <FormErrors touched={touched.name} message={errors.name} />
          </div>
          <div className="input">
            <input
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              type="text"
              name="email"
              placeholder="Seu email..."
              className={touched.email && errors.email ? "has-error" : null}
            />
            <FormErrors touched={touched.email} message={errors.email} />
          </div>
          <div className="message">
            <textarea
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              id="story"
              name="message"
              rows="10"
              cols="33"
              placeholder="Escreva uma mensagem"
              className={touched.email && errors.email ? "has-error" : null}
            ></textarea>
            <FormErrors touched={touched.message} message={errors.message} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
  );
}

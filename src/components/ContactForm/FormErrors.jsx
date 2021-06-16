import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const FormErrors = ({ touched, message }) => {
  if (!touched) {
    return <span className="form-message invalid">&nbsp;</span>;
  }
  if (message) {
    return <span className="form-message invalid">* {message}</span>;
  }
  return (
    <div className="form-message valid">
      <AiOutlineCheck />
    </div>
  );
};

export default FormErrors;

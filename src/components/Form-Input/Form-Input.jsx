import React from 'react';
import '../../App.scss';

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />

      {label ? <label className="form-input-label">{label}</label> : null}
    </div>
  );
}

import React from 'react';

function Input({ id, name, value, onChange, type = "text", className = "" }) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder='...'
      className={`w-full border bg-transparent  px-3 py-3 ${className}`}
    />
  );
}

export default Input;

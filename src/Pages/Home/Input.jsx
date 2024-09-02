import React from 'react';

function Input({ id, name, value, onChange, type = "text", className = "" }) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={`w-full border rounded-md px-3 py-2 ${className}`}
    />
  );
}

export default Input;

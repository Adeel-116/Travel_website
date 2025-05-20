import React from "react";

const InputField = ({ name, label, type, placeholder, value, onChange, error, children }) => (
  <div className={`mb-3 flex flex-col ${children}`}>
    <label
      htmlFor={name}
      className="text-gray-500 text-sm font-medium mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 text-sm border ${
        error ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-green-500"
      } rounded-md focus:outline-none focus:ring-1`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default InputField;

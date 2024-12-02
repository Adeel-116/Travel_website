import React from "react";

const InputField = ({ label, type, placeholder, children}) => (
  <div className={`mb-0.5 flex flex-col ${children}`}>
    <label
      htmlFor=""
      className="relative sm:top-2 top-1 max-w-fit  text-gray-400 text-[13px] sm:text-[14px] md:text-[16px]"
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full sm:px-4 sm:py-3 p-1.5 md:text-sm mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500`}
    />
  </div>
);

export default InputField;

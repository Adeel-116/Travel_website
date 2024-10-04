import React from "react";

function Button({ value }) {
  const {
    bg = false,
    buttonText = "",
    iconName = null,
    icon = false,
    iconColor = "",
    rotate = false,
    textColor = "",
    btnColor = "transparent",
  } = value;

  return (
    <div className="">
      <button
        className={`flex gap-1  items-center sm:rounded-lg rounded-sm font-medium transition-colors ${
          bg ? "" : "bg-transparent hover:bg-gray-700"
        } lg:px-3 lg:py-3 lg:text-[14px] p-[6px] text-[9px] sm:px-2 sm:py-2 sm:text-[11px]`}
        style={{
          color: textColor,
          backgroundColor: bg ? btnColor : "",
        }}
      >
        {icon && iconName && (
          <span
            className={`${
              rotate ? "transform rotate-90" : ""
            } flex items-center lg:text-lg text-[10px] md:text-sm`}
            style={{ color: iconColor }}
          >
            {iconName}
          </span>
        )}
        {buttonText}
      </button>
    </div>
  );
}

export default Button;

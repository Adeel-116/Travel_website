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
    <div className="flex">
      <button
        className={`flex items-center rounded-lg font-medium transition-colors ${
          bg ? "" : "bg-transparent hover:bg-gray-700"
        } lg:px-3 lg:py-3 lg:text-[15px]  md:px-2 md:py-2 md:text-[11px]`}
        style={{
          color: textColor,
          backgroundColor: bg ? btnColor : "",
        }}
      >
        {icon && iconName && (
          <span
            className={`${
              rotate ? "transform rotate-90" : ""
            } flex items-center lg:text-xl md:text-sm md:mr-1`}
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

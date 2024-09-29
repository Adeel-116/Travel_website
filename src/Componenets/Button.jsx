import React from 'react';

function Button({ buttonText, bg, icon, rotate, textColor, btnIcon, IconColor, bgColor}) {
  return (
    <div className='flex'>
      <button
        className={`flex items-center px-3 py-3 rounded-lg ${bg ? 'bg-white' : 'bg-transparent'} ${bgColor}  ${textColor} font-medium`}
      >
        {btnIcon && icon && (
          <span className={`${rotate ? 'transform rotate-90' : ''} flex items-center text-xl ${IconColor} mr-1`}>
            {icon}
          </span>
        )}
        {buttonText}
      </button>
    </div>
  );
}

export default Button;

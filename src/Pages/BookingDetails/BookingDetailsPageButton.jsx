import React from "react";

function BookingDetailsPageButton({ icon, text, children, onClickGoogleAuth }) {
  return (
    <>
      <div
        className={`md:py-3 sm:py-2 py-1 flex justify-center items-center rounded-lg 
    hover:cursor-pointer
    bg-[#BBF7D0] 
    border border-transparent 
    hover:bg-transparent 
    hover:border-[#BBF7D0] 
    transition-all duration-300 ease-in-out 
    ${children}`}

      onClick={onClickGoogleAuth}
     
      >
        {icon && (
          <div>
            <img src={icon} className="md:w-full w-[85%]" alt="" />
          </div>
        )}
        {text && (
          <h1 className="font-medium md:ml-2 ml-0.5 md:text-lg text-sm">{text}</h1>
        )}
      </div>
    </>
  );
}

export default BookingDetailsPageButton;

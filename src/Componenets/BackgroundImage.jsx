import React from 'react'

function BackgroundImage({ imageUrl, children, className }) {
  return (
    <div
    className={`relative sm:w-[100%] w-[100%] h-auto bg-cover bg-center bg-no-repeat  ${className}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
     {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black bg-opacity-30 z-0"></div> */}

    {children && (
      <div className="">
        {children}
      </div>
    )}
  </div>
  )
}

export default BackgroundImage;
import React from 'react'

function BackgroundImage({ imageUrl, children, className }) {
  return (
    <div
    className={`w-full h-auto bg-cover bg-no-repeat bg-center ${className}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {children && (
      <div className="">
        {children}
      </div>
    )}
  </div>
  )
}

export default BackgroundImage;
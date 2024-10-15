import React from 'react'
import Button from './Button'

function TextContent({heading, paragraph, button}) {
  return (
    <div className="lg:w-[90%] mx-auto h-auto flex items-center justify-between p-2 sm:py-5 sm:px-6">
    <div className="min-w-fit">
      <h1 className="sm:text-[2.5rem] text-[1.6rem] font-semibold">{heading}</h1>
      <p className="text-[11px] sm:text-[16px] 2xl:w-[90%]">{paragraph}</p>
    </div>

    <div className="w-auto hidden 2xl:block">
    
    
    {button && <Button
       value={{
          bg: true,
          buttonText: "See all",
          icon: false,
          iconName: '',
          iconColor: "#ffff",
          rotate: false,
          textColor: "#000",
          border: true,
        }}
      />
}
    </div>
  </div>
  )
}

export default TextContent
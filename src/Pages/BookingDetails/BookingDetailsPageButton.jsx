import React from 'react'

function BookingDetailsPageButton({icon, text, children}) {
  return (
    <>
        <div className={`md:py-4 sm:py-3 py-1.5 flex justify-center items-center border-2 rounded-lg border-green-200 ${children}`}>
            {icon && <div>
                <img src={icon} className='md:w-full w-[85%]' alt="" />
            </div>
            }
            {
             text &&
             <h1 className='font-medium md:ml-2 ml-0.5 md:text-lg text-sm'>{text}</h1>   
            }
        </div>
    
    </>
  )
}

export default BookingDetailsPageButton
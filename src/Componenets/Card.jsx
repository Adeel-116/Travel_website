import React from 'react'

function Card({imageUrl, Name}) {
  return (
    <>
    <div className='md:w-auto  w-[100%] h-auto bg-white p-2 flex flex-row sm:rounded-xl'>
        <div className='img '>
            <img src={imageUrl} className='p-1' alt="" />
           
        </div>
        <div className='flex flex-col justify-center gap-y-[1px] px-2'>
            <h1 className='font-semibold text-gray-700 sm:text-lg text-sm'>{Name}</h1>
            <div className='w-fit flex flex-row sm:gap-x-[10px] justify-center items-center sm:text-[15px] font-medium text-sm gap-x-[4px] md:mr-20'>
            <h1 className=' text-black'>Flight</h1>
            <span className='p-[3px] rounded-full bg-black'></span>
            <h1 className=' text-black'>Hotel</h1>
            <span className='p-[3px] rounded-full bg-black'></span>
            <h1 className=' text-black'>Resorts</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
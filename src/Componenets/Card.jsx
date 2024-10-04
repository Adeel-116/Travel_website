import React from 'react'

function Card({imageUrl, Name}) {
  return (
    <>
    <div className='md:w-auto w-[100%] h-auto bg-gray-200 md:p-2 p-1 flex flex-row rounded-lg'>
        <div className='img '>
            <img src={imageUrl} className='p-1' alt="" />
        </div>
        <div className='flex flex-col justify-center md:px-2'>
            <h1 className='font-semibold text-gray-700'>{Name}</h1>
            <div className='w-fit flex flex-row md:gap-x-[5px] justify-center  items-center gap-x-[4px]'>
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
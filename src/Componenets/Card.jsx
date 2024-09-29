import React from 'react'

function Card({imageUrl, Name}) {
  return (
    <>
    <div className='w-[30%] h-auto bg-white p-5 flex flex-row rounded-lg'>
        <div className='img '>
            <img src={imageUrl} alt="" />
        </div>
        <div className='flex flex-col justify-center px-3'>
            <h1 className='font-semibold text-gray-700'>{Name}</h1>
            <div className='w-fit flex flex-row justify-center items-center'>
            <h1 className='pr-3 text-black'>Flight</h1>
            <span className='p-[0.15rem] rounded-full bg-black'></span>
            <h1 className='pr-3 pl-3 text-black'>Hotel</h1>
            <span className='p-[0.15rem] rounded-full bg-black'></span>
            <h1 className='pr-3 pl-3 text-black'>Resorts</h1>
            </div>
        </div>

    </div>
    </>
  )
}

export default Card
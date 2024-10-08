import React from "react";
import letterPic from "../../assets/Section2/Newsletter.png";

function NewsLetter() {
  return (
    <>
      <div className="lg:w-[90%] md:w-[96%] mx-auto bg-green-200 flex justify-center rounded-2xl">
        <div className="sm:w-[74%] w-full p-5 h-auto  flex flex-col xl:gap-6 gap-3 justify-center ">
            
          <div>
            <h1 className="xl:w-[20%] sm:w-[100%] sm:text-[2.1rem] text-[2.2rem] font-semibold leading-10">
              Subscribe NewsLetter
            </h1>
          </div>
    
          <div className="flex flex-col lg:w-1/2 sm:w-[75%] gap-1">
            <h1 className="xl:text-xl sm:text-[1rem] font-medium">The Travel</h1>
            <p className="xl:text-[14px] sm:text-sm mb-1">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className="flex xl:gap-3 gap-2 bg-red-400" >
            <input
              type="text"
              className="w-full h-auto lg:py-3 lg:px-4  py-1 px-2 font-medium"
              placeholder="Your Email Address"
            />
            <button className="bg-black rounded-sm text-white lg:py-3 lg:px-4  py-2 px-3 text-[13px]">
              Subscribe
            </button>
            </div>
          </div>


        </div>
        <div className="lg:w-[23%] h-auto bg-yellow-400 hidden sm:block sm:w-[17%] flex items-center">
          <img src={letterPic} alt="" />
        </div>
      </div>
    </>
  );
}

export default NewsLetter;

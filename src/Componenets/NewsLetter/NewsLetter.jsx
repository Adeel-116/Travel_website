import React from "react";
import letterPic from "../../assets/Section2/Newsletter.png";

function NewsLetter() {
  return (
    <>
      <div className="w-[90%] mx-auto bg-green-200 flex justify-center rounded-2xl">
        <div className="w-[74%] p-4 h-auto  flex flex-col gap-6 justify-center">
            
          <div>
            <h1 className="w-[20%] text-[2.4rem] font-semibold leading-10">
              Subscribe NewsLetter
            </h1>
          </div>
    
          <div className="flex flex-col w-1/2 gap-1">
            <h1 className="text-xl font-medium">The Travel</h1>
            <p className="text-[14px] mb-1">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className="flex gap-3">
            <input
              type="text"
              className="w-[76%] h-auto py-3 px-4 font-medium"
              placeholder="Your Email Address"
            />
            <button className="bg-black rounded-sm text-white px-3 text-[13px]">
              Subscribe
            </button>
            </div>
          </div>


        </div>
        <div className="w-[23%] h-auto ">
          <img src={letterPic} alt="" />
        </div>
      </div>
    </>
  );
}

export default NewsLetter;

import React from "react";
import letterPic from "../../assets/HomePage/Newsletter.png";

function NewsLetter() {
  return (
    <div className="lg:w-[85%] md:w-[96%] mx-auto bg-lightGreen flex justify-center md:rounded-2xl">
      <div className="w-full lg:w-[75%] p-5 flex flex-col sm:gap-4 gap-1 justify-center">
        <h1 className="text-[2rem] font-semibold 2xl:w-[30%] leading-10 sm:text-[2.1rem]">
          Subscribe Newsletter
        </h1>
        
        <div className="flex flex-col gap-2 sm:w-2/3">
          <h2 className="text-xl sm:text-lg font-medium">The Travel</h2>
          <p className="text-[11px] sm:text-xs xl:text-lg">
            Get inspired! Receive travel discounts, tips, and behind-the-scenes stories.
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              className="md:w-2/3 w-full py-2 px-3 text-sm md:text-lg font-medium"
              placeholder="Your Email Address"
            />
            <button className="bg-black text-white py-2 px-3 text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex lg:w-[23%] sm:w-[17%] items-center">
        <img src={letterPic} alt="Newsletter" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default NewsLetter;

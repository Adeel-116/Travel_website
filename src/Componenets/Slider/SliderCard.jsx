import React from "react";
import { FaStar } from "react-icons/fa";
import GoogleIcon from "../../assets/HomePage/google-icon.png";
import ReviewPic from "../../assets/HomePage/Review-pic.png";

function SliderCard() {
  const starsArray = Array(5).fill(0);
  return (
    <>
      <div className="w-72 h-auto relative z-[100]">
        <div className="absolute top-3 left-3 sm:block hidden w-full h-full bg-lightGreen z-[-10] rounded-2xl"></div>
    <div className="w-72 h-auto flex flex-col gap-3 sm:bg-white bg-lightGreen py-7 px-4 rounded-2xl"
    >
        <div>
          <h1 className="text-xl w-full font-semibold">
            “A real sense of community, nurtured”
          </h1>
        </div>
        <div>
          <p className="text-[11px]">
            Really appreciate the help and support from the staff during these
            tough times. Shoutout to Katie for
          </p>
        </div>
        <div className="flex gap-2 text-yellow-500">
          {starsArray.map((_, i) => (
            <div key={i}>
              <FaStar />
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-l font-semibold">Olga</h1>
          <p className="text-[10px]">Weave Studios – Kai Tak</p>
        </div>

        <div className="flex">
          <img src={GoogleIcon} alt="Google Icon" />
          <h1 className="text-[11px] flex justify-center items-center pl-1 font-medium">
            Google
          </h1>
        </div>

        <div>
          <img src={ReviewPic} alt="Review Pic" />
        </div>
      </div>
      </div>
    </>
  );
}

export default SliderCard;

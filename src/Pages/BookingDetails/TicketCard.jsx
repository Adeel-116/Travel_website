import React from "react";
import Emirates from "../../assets/BookingDetails/Emirates.png";
import { MdFlight } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";

function TicketCard() {
  return (
    <>
      <div className="w-full h-auto bg-white md:py-4 py-2 lg:px-4">

        {/* Div1 */}
        <div className="w-full h-auto flex justify-between md:text-[13px] text-[12px]">
          <h1 className="font-medium ">Return Wed, Dec 8</h1>
          <p className="font-medium ">2h 28m</p>
        </div>


        {/* Div 2 */}
        <div className="sm:mt-3 mt-1 w-full flex lg:justify-between lg:flex-row flex-col">
          <div className="w-fit h-auto flex p-2 items-center border  border-gray-200 rounded-sm">
            <div className="flex justify-center ">
              <div className="logo">
                <img src={Emirates} alt="" />
              </div>
              <div className="px-3">
                <h1 className="font-medium text-lg"> Emirates</h1>
                <p className="text-[10px]">Airbus A320</p>
              </div>
            </div>
          </div>

          <div className="lg:mt-0 sm:mt-3 mt-1 icons flex lg:justify-center items-center">
            <div className="rotate-90 sm:p-3 sm:text-xl p-1 text-sm  border-t-2">
              <MdFlight />
            </div>
            <div className="sm:p-3 p-1 text-sm sm:text-xl  border-r-2">
              <FaWifi />
            </div>
            <div className=" sm:p-3 p-1 text-sm sm:text-xl border-r-2">
              <MdWatchLater />
            </div>
            <div className=" sm:p-3 p-1 text-sm sm:text-xl border-r-2">
              <IoFastFood />
            </div>
            <div className=" sm:p-3 p-1 text-sm sm:text-xl border-r-2">
              <MdOutlineAirlineSeatReclineExtra />
            </div>
          </div>
        </div>



        {/* Div3 */}

        <div className="mt-4 flex justify-center w-full h-auto gap-x-5 md:text-[10px] lg:text-[12px] text-[8px]">
          <div className="flex lg:justify-center items-center">
            <h1 className="font-medium">12:00 pm</h1>
            <p className="sm:text-[10px] text-[8px] p-1">Newark(EWR)</p>
          </div>

          <div className="flex justify-center md:text-[10px] lg:text-[12px]">
            <div className="flex items-center justify-center">
              <span className="lg:w-[5px] w-0 h-0 lg:h-[5px] bg-black rounded-full"></span>
              <span className="md:w-10 w-5 relative -left-1 h-[1px] bg-black "></span>
            </div>

            <div className="rotate-90 p-1 text-xl">
              <MdFlight />
            </div>

            <div className="flex -rotate-180 items-center justify-center">
              <span className="lg:w-[5px] w-[0px] h-[0px] lg:h-[5px] bg-black rounded-full"></span>
              <span className="md:w-10 w-5 relative -left-1 h-[1px] bg-black "></span>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <h1 className="font-medium">12:00 pm</h1>
            <p className="sm:text-[10px] text-[8px] p-1">Newark(EWR)</p>
          </div>
        </div>



      </div>
    </>
  );
}

export default TicketCard;

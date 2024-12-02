import React from "react";
import { Header } from "../../Componenets/ComponentLink";
import TicketCard from "./TicketCard";
import { IoIosArrowForward } from "react-icons/io";
import BookingPriceCard from "./BookingPriceCard";
import LoginSignupCard from "./LoginSignupCard";
import PaymentDetails from "./PaymentDetails";
import AddNewCard from "./AddNewCard";

function BookingDetails() {
  return (
    <>
      <div className=" bg-lightWhite">
        <div className="header bg-gray-500">
          <Header />
        </div>

        <div className="xl:w-[90%] md:w-[95%] w-[95%] h-auto mx-auto bg-lightWhite">
          <div className="py-4 px-2  w-fit">
            <div className="flex w-full h-auto">
              <h4 className="font-medium text-red-300 text-[10px]">Turkey</h4>
              <div className="text-[10px] px-2 flex justify-center items-center">
                <IoIosArrowForward />
              </div>
              <h4 className="font-medium text-red-300 text-[10px]">Istanbul</h4>
              <div className="text-[10px] px-2 flex justify-center items-center">
                <IoIosArrowForward />
              </div>
              <h4 className="font-medium text-[10px]">
                CVK Park Bosphorus Hotel Istanbul
              </h4>
            </div>
          </div>

          <div className="w-full h-auto flex gap-3 sm:flex-row flex-col-reverse">
            <div className="sm:w-2/3 w-[100%] mx-auto h-auto">
              <div className="sm:w-full w-[100%] mx-auto h-fit sm:px-5 sm:py-7 p-2 flex flex-col bg-white">
                <div className="flex justify-between lg:px-3">
                  <h1 className="font-medium sm:text-[1.6rem] text-sm">
                    Emirates A380 Airbus
                  </h1>
                  <h1 className="font-medium sm:text-[1.6rem] text-sm text-red-300">
                    $240
                  </h1>
                </div>
                <div className="w-full bg-white">
                  <TicketCard />
                </div>
              </div>

              <div className="mt-10 sm:w-full w-[100%] mx-auto h-fit sm:px-5 sm:py-7 p-3 bg-white">
                <PaymentDetails login={false}/>
              </div>

              <div className="md:mt-10 mt-5 sm:w-full w-[100%] mx-auto h-fit sm:px-5 sm:py-7 p-3.5 flex flex-col md:gap-y-3 gap-y-2 bg-white">
                <LoginSignupCard/>
              </div>


              <div className="mt-10 sm:w-full w-[100%] mx-auto h-fit sm:px-5 sm:py-7 p-3 flex flex-col gap-y-3 bg-white">
                <PaymentDetails login={true}/>
              </div>


             


            </div>


            <div className="sm:w-1/3 w-[100%] bg-white p-3 h-fit">
            <BookingPriceCard />
            </div>


            

          </div>
        </div>
      </div>
    </>
  );
}

export default BookingDetails;

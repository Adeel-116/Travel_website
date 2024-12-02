import React from 'react'
import PriceDetailsPicture from "../../assets/BookingDetails/PriceDetailsPicture.png";

function BookingPriceCard() {
  return (
    <>
     <div className="w-full h-auto flex md:flex-row flex-col lg:p-3 md:p-2  border-b-2 border-gray-300">
                <div className="w-fit h-auto">
                  <img src={PriceDetailsPicture} alt="" />
                </div>

                <div className="md:px-4 sm:py-2 py-1 flex justify-center flex-col">
                  <h1 className="text-gray-500 lg:text-lg  text-[11px]">
                    Economy
                  </h1>
                  <h1 className="font-medium lg:text-lg  text-[11px]">
                    Emirates A380 Airbus
                  </h1>

                  <div className="rating w-fit flex justify-center items-center lg:mt-2">
                    <p className="lg:px-1.5 lg:py-0.5 p-[2px] text-[10px] rounded-sm border border-gray-300">
                      4.2
                    </p>
                    <p className="lg:text-[10px] text-[8px] lg:px-2 px-2 md:py-0 sm:py-1">
                      {" "}
                      <span className="font-bold">Very Good</span> 54 reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:py-4 py-1 border-b-2 border-gray-300 ">
                <h1 className="md:text-sm text-[10px] font-medium">
                  Your booking is protected by{" "}
                  <span className="font-bold">golobe</span>
                </h1>
              </div>

              <div className="py-2  border-b-2 border-gray-300 lg-text-sm md:text-[13px] text-[10px]">
                <p className="font-medium">Price Deatils</p>
                <div className=" py-1 flex justify-between items-center">
                  <p>Base Fare </p>
                  <p>$400</p>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <p>Discount</p>
                  <p>$400</p>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <p>Taxes </p>
                  <p>$400</p>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <p>Services Fare </p>
                  <p>$400</p>
                </div>
              </div>

              <div>
                <div className="py-3 flex justify-between items-center">
                  <p>Total </p>
                  <p className="font-medium">$400</p>
                </div>
              </div>
    </>
  )
}

export default BookingPriceCard
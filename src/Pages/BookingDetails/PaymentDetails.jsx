import React from "react";
import { FaCcVisa } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

function PaymentDetails({ login }) {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        {!login && (
          <>
            {/* Div1 */}
            <div className="flex flex-col lg:p-3 p-1.5 rounded-xl bg-green-200">
              <div className="w-full flex h-auto p-2 items-center">
                <div className="w-full">
                  <h1 className="font-medium md:text-xl text-sm">
                    Pay in full
                  </h1>
                  <p className="md:text-sm text-[12px]">
                    Pay the total and you are all set
                  </p>
                </div>

                <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center">
                  <input
                    type="radio"
                    className="appearance-none w-4 h-4 bg-white border border-green-400 rounded-full checked:bg-white checked:border-4 checked:border-white"
                  />
                </div>
              </div>
            </div>

            {/* Div2 */}
            <div className="flex flex-col lg:p-3 md:p-1.5 p-1.5 rounded-xl bg-red-300">
              <div className="w-full flex h-auto p-2 items-center">
                <div className="w-full">
                  <h1 className="font-medium md:text-xl text-sm">
                    Pay part now, part later
                  </h1>
                  <p className="md:text-sm text-[12px] lg:w-[75%] w-[85%]">
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full bg-black flex justify-center items-center">
                  <input
                    type="radio"
                    className="appearance-none w-4 h-4 bg-white border rounded-full checked:bg-white checked:border-4 checked:border-white"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {login && (
          <>
            <div className="flex flex-col lg:p-3 p-1.5 rounded-xl bg-green-200">
              <div className="w-full flex h-auto p-2 items-center">
                <div className="w-full flex items-center">
                  <div className="icon md:text-2xl text-sm flex gap-x-5">
                    <FaCcVisa />
                    <p className="md:text-lg text-sm font-medium">
                      <span className="font-bold">****</span>
                      {""} 4321
                    </p>
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center">
                  <input
                    type="radio"
                    className="appearance-none w-4 h-4 bg-white border border-green-400 rounded-full checked:bg-white checked:border-4 checked:border-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:p-3 md:p-1.5 p-1.5 rounded-xl border-2 border-green-400 border-dashed">
              <div className="w-full flex h-auto justify-center items-center">
               
                <div className="w-auto h-auto md:py-8 flex flex-col justify-center items-center">
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border-2 border-green-400">
                        <div className="text-[2rem] text-green-400">
                            <IoIosAdd />
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">Add a new Card</p>
                </div>
                
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PaymentDetails;

import React from "react";
import Button from "./Button";
import { IoIosSend } from "react-icons/io";
function CardBooking({backgroundURL, data, para, btnText}) {
  return (
    <>
      <div
        className="relative w-[40%] h-[60vh] rounded-2xl bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundURL})` }}
      >
        <div className="w-full absolute bottom-5 rounded-2xl">
          <h1 className="text-white text-3xl font-semibold text-center">
            {data}
          </h1>
          <p className="w-[80%] mx-auto text-center text-gray-200">
            {para}
          </p>
          <div className="flex justify-center mt-2">
          <Button
              buttonText={btnText}
              bg={true}
              rotate={false}
              icon={<IoIosSend />}
              textColor="text-black"
              btnIcon={true}
              IconColor="text-black"
              bgColor="bg-green-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBooking;

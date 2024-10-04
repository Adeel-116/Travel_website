import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import { IoIosBed } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const Form = () => {
  return (
    <>

      <div className=" relative top-7 w-fit mx-auto h-auto bg-white z-10 md:rounded-3xl rounded-lg  md:p-5 p-3 flex flex-col gap-y-3" >
         
      <div className="w-fit h-auto flex">
        <Button
          value={{
            bg: false,
            buttonText: "Find Flights",
            icon: true,
            iconName: <MdFlight />,
            iconColor: "#000",
            rotate: true,
            textColor: "#000",
            btnColor: "transparent",
          }}
        />
      </div>

      <div className=" w-fit flex items-center gap-x-10 flex-wrap ">
        <div>
          <TextField labelData="From-To" type="Select" />
        </div>

        <div>
        <TextField labelData="Trip" type="Trip" />
        </div>

        <div>
        <TextField labelData="date" type="Date" />
        </div>

        <div>
          <TextField labelData="Passenger-Class" type="Select" />
        </div>
      </div>

      <div className="w-auto h-auto flex xl:justify-end md:gap-3 gap-2">
        <Button
          value={{
            bg: true,
            buttonText: "Add Promo code",
            icon: true,
            iconName: <IoIosAdd />,
            iconColor: "#000",
            rotate: false,
            textColor: "#000",
            btnColor: "#8dd3bb",
          }}
        />
        <Button
          value={{
            bg: true,
            buttonText: "Show Flight",
            icon: true,
            iconName: <IoIosSend />,
            iconColor: "#000",
            rotate: false,
            textColor: "#000",
            btnColor: "#8dd3bb",
          }}
        />
      </div>


           
        </div>

    </>
  );
};

export default Form;

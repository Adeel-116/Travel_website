import React, { useState } from "react";
import TextField from "../TextField";
import Button from '../Button'
import { IoIosBed } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { IoIosSend } from "react-icons/io";


const Form = () => {
    const [Trip, setTrip] = useState("Return");
    const tripOption = ["Return","One-way", "two-way"]

    

  return (
    <>
    {/* Buttons Div */}
    <div className="w-full h-auto flex">
              <Button buttonText="Find Flight" bg={false} rotate={true} icon={<MdFlight/>} textColor="text-black" btnIcon={true}  IconColor="text-black" />
              <Button buttonText="Find stay" bg={false} rotate={false} icon={<IoIosBed/>} textColor="text-black" btnIcon={true}   IconColor="text-black" />
    </div>

    {/* text Fields */}
    <div className="flex items-center justify-between">
        <div>
        <TextField labelData="From-To" type="Select"/>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor=""
            className="relative max-w-fit px-1 top-2 left-5 text-black text-sm bg-white"
          >
            Trip
          </label>

          {/* Div for flex row  */}
          <div className="flex flex-row items-center py-3 px-4 border border-black rounded-lg">
            <select
              id="from"
              value={Trip}
              onChange={(e) => setTrip(e.target.value)}
              className=""
            >
              {tripOption.map((options) => (
                <option key={options} value={options}>
                  {options}
                </option>
              ))}
            </select>
          </div>

        </div>
        
        <div>
        <TextField labelData="Depart-Return" type="Date"/>
        </div>


        <div>
        <TextField labelData="Passenger-Class" type="Select"/>
        </div>
    </div>


    {/* Button */}
    
    <div className="w-full h-auto flex justify-end mt-4">
              <Button buttonText="Add Promo code" bg={false} rotate={true} icon={<IoIosAdd/>} textColor="text-black" btnIcon={true}  IconColor="text-black" />
              <Button buttonText="Show Flights" bg={true} rotate={false} icon={<IoIosSend/>} textColor="text-black" btnIcon={true}   IconColor="text-black" bgColor="bg-green-300" />
    </div>


      

        
    </>
  );
};

export default Form;

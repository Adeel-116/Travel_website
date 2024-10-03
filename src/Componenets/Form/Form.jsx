import React, { useState } from "react";
import TextField from "../TextField";
import Button from '../Button'
import { IoIosBed } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { IoIosSend } from "react-icons/io";


const Form = () => {
  

    

  return (
    <>

    <div className="w-full h-auto flex sm:flex-wrap">
              {/* <Button buttonText="Find Flight" bg={false} rotate={true} icon={<MdFlight/>} textColor="text-black" btnIcon={true}  IconColor="text-black" />
              <Button buttonText="Find stay" bg={false} rotate={false} icon={<IoIosBed/>} textColor="text-black" btnIcon={true}   IconColor="text-black" /> */}
    </div>


    <div className="flex items-center justify-between">
        <div>
        <TextField labelData="From-To" type="Select"/>
        </div>
    
       <div>
        <TextField  labelData="date" type="Date"  />
       </div>
 
      
        
        <div>
        <TextField labelData="Trip" type="Trip"/>
        </div>


        <div>
        {/* <TextField labelData="Passenger-Class" type="Select"/> */}
        </div>
   



    
    <div className="w-full h-auto flex justify-end mt-4">
              {/* <Button buttonText="Add Promo code" bg={false} rotate={true} icon={<IoIosAdd/>} textColor="text-black" btnIcon={true}  IconColor="text-black" />
              <Button buttonText="Show Flights" bg={true} rotate={false} icon={<IoIosSend/>} textColor="text-black" btnIcon={true}   IconColor="text-black" bgColor="bg-green-300" /> */}
    </div>

    </div>
      

        
    </>
  );
};

export default Form;

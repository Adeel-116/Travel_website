import React from "react";
import { FlightPageLogo } from "../../Componenets/ImageLink";
import InputField from "./InputField";
import BookingDetailsPageButton from "../BookingDetails/BookingDetailsPageButton";
import facebookIcon from "../../assets/BookingDetails/facebook-icon.png";
import googleIcon from "../../assets/BookingDetails/google-icon.png";
import appleIcon from "../../assets/BookingDetails/apple-icon.png";
import FlightLogin from "../../assets/LoginSignup/FlightLogin.png";

function VerifyCode() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">

        {/* Login Div */}
        <div className="w-full h-auto flex">

          {/* Main Div */}
          <div className="2xl:w-[70%] xl:w-[80%] lg:w-[85%] md:w-[92%] sm:w-[90%] w-[98%] h-auto mx-auto md:flex lg:p-5 bg-gray-50">
            <div className="2xl:w-1/2  md:w-[60%] sm:w-[100%] ">
              <div className="h-auto 2xl:p-5 p-2">
                <div>
                  <img src={FlightPageLogo} alt="" />
                </div>

                <div className="sm:mt-16 mt-10 flex flex-col">
                  <h1 className="w-full h-auto font-semibold text-[2rem] sm:text-[2.6rem]">
                    Verify Code
                  </h1>
                  <p className="text-sm md:text-[17px] text-gray-500 font-medium">
                  An authentication code has been sent to your email.
                  </p>

                    <div className="mt-1 xl:w-[75%] w-full lg:w-[80%] ">
                  <div className=" flex flex-col">
                    <InputField
                      type={"email"}
                      label="Enter Code"
                      placeholder="779234@12"
                      
                    />
                   
                    </div>
                   
                    <p className="mt-2 text-sm text-center text-gray-600">
                    Didn’t receive a code? 
                    <a href="#" className="text-red-600 hover:underline">
                    Resend
                    </a>
                  </p>

                  <div>
                    <button className="mt-2 w-full h-auto lg:py-3 md:py-3 py-1.5 font-medium text-center bg-green-200 rounded-lg">
                      <p>Verify</p>
                    </button>
                  </div>


            

                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:w-[45%] md:w-[50%] h-full bg-center md:block  hidden  rounded-2xl"
              style={{
                backgroundImage: `url(${FlightLogin})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyCode;

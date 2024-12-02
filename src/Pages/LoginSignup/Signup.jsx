import React from "react";
import { FlightPageLogo } from "../../Componenets/ImageLink";
import InputField from "./InputField";
import BookingDetailsPageButton from "../BookingDetails/BookingDetailsPageButton";
import facebookIcon from "../../assets/BookingDetails/facebook-icon.png";
import googleIcon from "../../assets/BookingDetails/google-icon.png";
import appleIcon from "../../assets/BookingDetails/apple-icon.png";
import FlightLogin from "../../assets/LoginSignup/FlightLogin.png";

function Signup() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">

        {/* Login Div */}
        <div className="w-full h-auto flex">

          {/* Main Div */}
          <div className="2xl:w-[70%] xl:w-[80%] lg:w-[85%] md:w-[92%] sm:w-[90%] w-[98%] h-auto mx-auto md:flex lg:p-5 bg-gray-50">
       
          <div
              className="lg:w-[45%] w-[50%] h-full  md:block hidden  rounded-2xl"
              style={{
                backgroundImage: `url(${FlightLogin})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div className="2xl:w-1/2  md:w-[60%] sm:w-[100%] ">
              <div className="h-auto 2xl:p-5 p-2">
                <div>
                  <img src={FlightPageLogo} alt="" />
                </div>

                <div className="sm:mt-16 mt-5 flex flex-col ">
                  <h1 className="w-full h-auto font-semibold text-[2rem] sm:text-[2.6rem]">
                    Signup
                  </h1>
                  <p className="text-sm md:text-[15px] text-gray-500 font-medium">
                  Let’s get you all st up so you can access your personal account.
                  </p>

                <div className="mt-1 xl:w-full w-full ">
                  <div className="w-full flex flex-col">

                    <div className="w-full flex sm:flex-row flex-col gap-1">
                    <InputField
                      type={"Text"}
                      label="First"
                      placeholder="john.doe"
                      children={'sm:w-1/2 w-full'}
                      
                    />
                    <InputField
                      type={"Text"}
                      label="Last"
                      placeholder="David"
                      children={'sm:w-1/2 w-full'}
                    />
                    </div>

                    <div className="w-full flex sm:flex-row flex-col flex-wrap">
                    <InputField
                      type={"Email"}
                      label="Email"
                      placeholder="john.!2@gmail.com"
                      children={'sm:w-1/2 w-full'}

                    />
                    <InputField
                      type={"Number"}
                      label="Phone Number"
                      placeholder="*************"
                      children={'sm:w-1/2 w-full'}

                    />
                    </div>
                    

                    <InputField
                      type={"email"}
                      label="Email"
                      placeholder="john.!2@gmail.com"
                    />
                    <InputField
                      type={"password"}
                      label="Password"
                      placeholder="*************"
                    />


                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="sm:ml-1 ml-0.5 text-gray-700 sm:text-sm text-[13px]">I agree to all the Terms and Privacy Policies</span>
                      </label>
                      
                    </div>
                 

                  <div>
                    <button className="mt-2 w-full h-auto lg:py-3 md:py-3 py-1.5 font-medium text-center bg-green-200 rounded-lg">
                      <p>Login</p>
                    </button>
                  </div>

                  <p className="mt-2 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-green-600 hover:underline">
                       Login
                    </a>
                  </p>

                  <div className=" flex items-center justify-center my-4">
                    <div className="border-t border-gray-300 flex-grow mr-3"></div>
                    <span className="text-gray-500 md:text-sm text-sm font-medium ">
                      Or Signup with
                    </span>
                    <div className="border-t border-gray-300 flex-grow ml-3"></div>
                  </div>

                  <div className="flex gap-x-3">
                    <BookingDetailsPageButton
                      icon={facebookIcon}
                      text=""
                      children="w-1/2"
                    />
                    <BookingDetailsPageButton
                      icon={googleIcon}
                      text=""
                      children="w-1/2"
                    />
                    <BookingDetailsPageButton
                      icon={appleIcon}
                      text=""
                      children="w-1/2"
                    />
                  </div>


                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

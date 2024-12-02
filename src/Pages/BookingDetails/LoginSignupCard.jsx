import React from 'react'
import BookingDetailsPageButton from "./BookingDetailsPageButton"
import facebookIcon from "../../assets/BookingDetails/facebook-icon.png"
import googleIcon from "../../assets/BookingDetails/google-icon.png"
import appleIcon from "../../assets/BookingDetails/apple-icon.png"
import gmailIcon from "../../assets/BookingDetails/gmail-icon.png"

function LoginSignupCard() {
  return (
    <>
         <div className="flex flex-col gap-y-2">
                  <h1 className="font-semibold md:text-2xl text-[19px]">
                    Login or Sign up to book
                  </h1>
                  <input
                    type="text"
                    placeholder="Phone Number "
                    typeof="number"
                    className="w-full border lg:p-4 md:p-3 p-2 md:text-lg text-sm border-black "
                  />
                  <p className="md:text-sm text-[12px]">
                    We’ll call or text you to confirm your number. Standard
                    message and data rates apply.{" "}
                    <span className="font-medium">Privacy Policy</span>
                  </p>

                  <div>
                    <button className="w-full h-auto lg:py-4 md:py-3 py-1.5 text-center bg-green-200 rounded-lg">
                      <p>Continue</p>
                    </button>
                  </div>

                  <div className="flex items-center justify-center my-4">
                    <div className="border-t border-gray-300 flex-grow mr-3"></div>
                    <span className="text-gray-500 md:text-lg text-sm font-medium ">Or</span>
                    <div className="border-t border-gray-300 flex-grow ml-3"></div>
                  </div>


                  <div className="flex flex-col md:gap-y-3 gap-y-2">
                    <div className="w-full flex gap-x-3">
                    <BookingDetailsPageButton icon={facebookIcon} text="" children="w-1/2"/>
                    <BookingDetailsPageButton icon={googleIcon} text="" children="w-1/2"/>
                    <BookingDetailsPageButton icon={appleIcon} text="" children="w-1/2"/>
                    </div>
                    <div>
                    <BookingDetailsPageButton icon={gmailIcon} text="Continue with gmail" children="w-full"/>
                    </div>
                  </div>

                </div>

    </>
  )
}

export default LoginSignupCard
import React, { useState } from "react";
import { FlightPageLogo } from "../../Componenets/ImageLink";
import InputField from "./InputField";
import FlightLogin from "../../assets/LoginSignup/FlightLogin.png";
import Popup from "./Popup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function VerifyCode() {
  const navigate = useNavigate()
  const [otp, setOTP] = useState("");
  const [error, setError]= useState("")
   const [notification, setNotification] = useState(null);

  const handleChange =(e)=>{
    const value = e.target.value;
    if(/^\d{0,6}$/.test(value)){
      setOTP(value)
      setError("")
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(otp)
    try {
      const response = await axios.post("http://localhost:5000/verify-otp",  { otp }, {withCredentials : true});
      console.log(response)
      if (response.status === 200) {
        setNotification({ type: "success", message: "OTP Match Successfully" });
        navigate('/update-password')
      }

    } catch (error) {
      const status = error.response?.status;
         
      if (status === 400) {
        setNotification({ type: "Error", message: "OTP required" });
      }
      else if (status === 404) {
        setNotification({ type: "Error", message: "OTP not found or expired. Please request again." });
      }
      else if (status === 410) {
        setNotification({ type: "Error", message: "OTP has expired. Please request again." });
      }
      else if (status === 401) {
        setNotification({ type: "Error", message: "Invalid OTP" });
      }
      else{
        setNotification({ type: "Error", message: "Server Internal Error" });
      }
    }
  };



  return (
    <>
        {notification && (
        <Popup
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}


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

                    <div className="mt-5 xl:w-[75%] font-semibold w-full lg:w-[80%]">
                  <div className=" flex flex-col ">
                    <InputField
                        name="OTP"
                        type="otp"
                        label="Enter OTP"
                        placeholder="876543"
                        value={otp}
                        onChange={handleChange}
                        error={error}
                        children="w-full"
                      />
                   
                    </div>

                  <div>
                    <button onClick={handleSubmit} className="mt-2 w-full h-auto lg:py-3 md:py-3 py-1.5 font-medium text-center bg-green-200 rounded-lg">
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

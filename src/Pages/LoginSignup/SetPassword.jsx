import React, { useState } from "react";
import { FlightPageLogo } from "../../Componenets/ImageLink";
import InputField from "./InputField";
import FlightLogin from "../../assets/LoginSignup/FlightLogin.png";
import Popup from "./Popup";
import axios from "axios";

function SetPassword() {
    const [resetPassword, setResetPassword] = useState({
      password: '',
      confirmPassword: '',
    })

     const [formErrors, setFormErrors] = useState({});
    const [notification, setNotification] = useState(null);
    

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setResetPassword((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      validateField(name, value);
    }

    function validateField(name, value){
      let error = "";

      switch (name) {
        case "password":
          error =
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              value
            )
              ? "Password must be 8+ chars, include uppercase, number, and symbol."
              : "";
          break;
  
          case "confirmPassword":
            error =
              value !== resetPassword.password
                ? "Passwords do not match."
                : "";
            break;
  
          default:
          error = value.trim() === "" ? `${name} is required` : "";
          break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      let hasError = false;

      for(const[key, value] of Object.entries(resetPassword)){
        validateField(key, value);
        if (formErrors[key]) hasError = true;
      }
      if (hasError) {
        setNotification({
          type: "error",
          message: "Please fix the validation errors.",
        });
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:5000/update-password",
          resetPassword,
          { withCredentials: true }
        );
      
        if (response.status === 201) {
          setNotification({ type: "success", message: "Password updated successfully" });
          navigate('/login'); 
        }
      } catch (error) {
        const status = error.response?.status;
      
        if (status === 403) {
          setNotification({ type: "error", message: "Session expired or unauthorized access" });
          navigate('/forgot-password');
        } else if (status === 500) {
          setNotification({ type: "error", message: "Internal server error" });
        } else {
          setNotification({ type: "error", message: "Something went wrong" });
        }
      }

    }



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

                <div className="sm:mt-20  flex flex-col">
                  <h1 className="w-full h-auto font-semibold text-[2rem] sm:text-[2.6rem]">
                    Set a Password
                  </h1>
                  <p className="text-sm md:text-[17px] text-gray-500 font-medium">
                  Your previous password has been reseted. Please set a new password for your account.
                  </p>

                    <div className="mt-5 xl:w-[75%] w-full lg:w-[80%] ">
                  <div className=" flex flex-col gap-y-1">
                  <InputField
                        name="password"
                        type="password"
                        label="Create New Password"
                        placeholder="******"
                        value={resetPassword.password}
                        onChange={handleChange}
                        error={formErrors.password}
                        children=" w-full"
                      />
                    <InputField
                        name="confirmPassword"
                        type="password"
                        label="Re-Enter Password"
                        placeholder="******"
                        value={resetPassword.confirmPassword}
                        onChange={handleChange}
                        error={formErrors.confirmPassword}
                        children=" w-full"
                      />               
                    </div>
                   
                    

                  <div>
                    <button onClick={handleSubmit} className="mt-2 w-full h-auto lg:py-3 md:py-3 py-1.5 font-medium text-center bg-green-200 rounded-lg">
                      <p>Set Password</p>
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

export default SetPassword;

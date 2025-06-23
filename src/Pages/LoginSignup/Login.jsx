import React, { useState } from "react";
import { FlightPageLogo } from "../../Componenets/ImageLink";
import InputField from "./InputField";
import BookingDetailsPageButton from "../BookingDetails/BookingDetailsPageButton";
import facebookIcon from "../../assets/BookingDetails/facebook-icon.png";
import googleIcon from "../../assets/BookingDetails/google-icon.png";
import appleIcon from "../../assets/BookingDetails/apple-icon.png";
import FlightLogin from "../../assets/LoginSignup/FlightLogin.png";
import Popup from "./Popup";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "email":
        error = !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email format." : "";
        break;

      case "password":
        error =
          !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          )
            ? "Password must be 8+ chars, include uppercase, number, and symbol."
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
  };

  const handleSubmit = async (e) => {
    let hasErrors = false;
    e.preventDefault();

    for (const [key, value] of Object.entries(formData)) {
      validateField(key, value);
      if (formErrors[key]) hasErrors = true;
    }
    if (hasErrors) {
      setNotification({
        type: "error",
        message: "Please fix the validation errors.",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", formData, { withCredentials: true });
      setNotification({
        type: "success",
        message: "Login Successfully",
      });

    } catch (error) {
      const status = error.response?.status;

      switch (status) {
        case 401:
          setNotification({
            type: "error",
            message: "Incorrect password",
          });
          break;

        case 404:

          setNotification({
            type: "warning",
            message: "User not found",
          });
          break;

        default:
   
          setNotification({
            type: "error",
            message: "Login failed. Please try again.",
          });

      }
    }

    setFormData({
      email: "",
      password: ""
    })
  }


  const handleAuth = () => {
    console.log("Button click")
    window.open('http://localhost:5000/api/auth/google', '_self');
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
                    Login
                  </h1>
                  <p className="text-sm md:text-[17px] text-gray-500 font-medium">
                    Login to acces you Global Account
                  </p>

                  <div className="mt-1 xl:w-[75%] w-full lg:w-[80%] ">
                    <div className=" flex flex-col">
                      <InputField
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                        children="w-full"
                      />
                      <InputField
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="******"
                        value={formData.password}
                        onChange={handleChange}
                        error={formErrors.password}
                        children=" w-full"
                      />
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="sm:ml-1 ml-0.5 text-gray-700 sm:text-sm text-[13px]">
                          Remember me
                        </span>
                      </label>
                      <NavLink
                        to={"/forget-password"}
                        className="sm:text-sm text-[13px] text-green-600 hover:underline"
                      >
                        Forgot Password?
                      </NavLink>
                    </div>

                    <div>
                      <button
                        onClick={handleSubmit}
                        className="mt-2 w-full h-auto lg:py-3 md:py-3 py-1.5 font-medium text-center bg-green-200 rounded-lg"
                      >
                        <p>Login</p>
                      </button>
                    </div>

                    <p className="mt-2 text-sm text-center text-gray-600">
                      Don't have an account?{" "}
                      <NavLink
                        to={"/signup"}
                        className="text-green-600 hover:underline"
                      >
                        Sign up
                      </NavLink>
                    </p>

                    <div className=" flex items-center justify-center my-4">
                      <div className="border-t border-gray-300 flex-grow mr-3"></div>
                      <span className="text-gray-500 md:text-sm text-sm font-medium ">
                        Or login with
                      </span>
                      <div className="border-t border-gray-300 flex-grow ml-3"></div>
                    </div>

                    <div className="flex gap-x-3">
                      <BookingDetailsPageButton
                        icon={googleIcon}
                        text=""
                        children="w-full"
                        onClickGoogleAuth={handleAuth}
                      />
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

export default Login;
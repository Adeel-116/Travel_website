import { useState } from "react";
import axios from "axios";
import { FlightPageLogo } from "../../Componenets/ImageLink";
import InputField from "./InputField";
import BookingDetailsPageButton from "../BookingDetails/BookingDetailsPageButton";
import Popup from "./Popup";
import facebookIcon from "../../assets/BookingDetails/facebook-icon.png";
import googleIcon from "../../assets/BookingDetails/google-icon.png";
import appleIcon from "../../assets/BookingDetails/apple-icon.png";
import FlightLogin from "../../assets/LoginSignup/FlightLogin.png";
import { useNavigate, NavLink } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // Other states like formSubmit, Notification and Accept Terms and Conditions.
  const [formErrors, setFormErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Handle input changes and validation
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
      case "phoneNumber":
        error = !/^\d{10,}$/.test(value) ? "Enter a valid phone number." : "";
        break;
      case "password":
        error =
          !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          )
            ? "Password must be 8+ chars, include uppercase, number, and symbol."
            : "";
        break;
      case "confirmPassword":
        error = value !== formData.password ? "Passwords do not match." : "";
        break;
      default:
        error = value.trim() === "" ? `${name} is required.` : "";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      let error = "";
      switch (key) {
        case "email":
          error = !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email format." : "";
          break;
        case "phoneNumber":
          error = !/^\d{10,}$/.test(value) ? "Enter a valid phone number." : "";
          break;
        case "password":
          error =
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              value
            )
              ? "Password must be 8+ chars, include uppercase, number, and symbol."
              : "";
          break;
        case "confirmPassword":
          error = value !== formData.password ? "Passwords do not match." : "";
          break;
        default:
          error = value.trim() === "" ? `${key} is required.` : "";
      }
      if (error) tempErrors[key] = error;
    });

    if (!agreeTerms) {
      tempErrors.terms = "You must agree to the Terms and Privacy Policies.";
    }

    setFormErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) {
      setNotification({
        type: "error",
        message: "Please fix the validation errors.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      if (response.status === 201) {
        setNotification({ type: "success", message: "Signup successful!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
        setAgreeTerms(false);
        setFormErrors({});
        navigate('/login')
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Signup failed. Please try again.",
      });
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
        <div className="w-full h-auto flex">
          <div className="2xl:w-[70%] xl:w-[80%] lg:w-[85%] md:w-[92%] sm:w-[90%] w-[98%] h-auto mx-auto md:flex lg:p-5 bg-gray-50">
            <div
              className="lg:w-[45%] w-[50%] h-full md:block hidden rounded-2xl"
              style={{
                backgroundImage: `url(${FlightLogin})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div className="2xl:w-1/2 md:w-[60%] sm:w-[100%]">
              <div className="h-auto 2xl:p-5 p-2">
                <img src={FlightPageLogo} alt="Logo" />

                <div className="sm:mt-16 mt-5 flex flex-col">
                  <h1 className="text-[2rem] sm:text-[2.6rem] font-semibold">
                    Signup
                  </h1>
                  <p className="text-sm md:text-[15px] text-gray-500 font-medium">
                    Let’s get you all set up so you can access your personal
                    account.
                  </p>

                  <div className="mt-3 w-full">
                    <div className="flex sm:flex-row flex-col gap-1">
                      <InputField
                        name="firstName"
                        type="text"
                        label="First Name"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={formErrors.firstName}
                        children="sm:w-1/2 w-full"
                      />
                      <InputField
                        name="lastName"
                        type="text"
                        label="Last Name"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={formErrors.lastName}
                        children="sm:w-1/2 w-full"
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col gap-1">
                      <InputField
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                        children="sm:w-1/2 w-full"
                      />
                      <InputField
                        name="phoneNumber"
                        type="text"
                        label="Phone Number"
                        placeholder="1234567890"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        error={formErrors.phoneNumber}
                        children="sm:w-1/2 w-full"
                      />
                    </div>

                    <InputField
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="****"
                      value={formData.password}
                      onChange={handleChange}
                      error={formErrors.password}
                    />
                    <InputField
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      placeholder="****"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      error={formErrors.confirmPassword}
                    />
                  </div>

                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={agreeTerms}
                      onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I agree to all the Terms and Privacy Policies
                    </span>
                  </label>
                  {formErrors.terms && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.terms}
                    </p>
                  )}

                  <button
                    className="mt-3 w-full py-2 bg-green-200 rounded-lg font-medium"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </button>

                  <p className="mt-2 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Login
                    </a>
                  </p>

                  <div className="flex items-center justify-center my-4">
                    <div className="border-t border-gray-300 flex-grow mr-3"></div>
                    <span className="text-gray-500 text-sm font-medium">
                      Or Signup with
                    </span>
                    <div className="border-t border-gray-300 flex-grow ml-3"></div>
                  </div>

                  <div className="flex gap-x-3">
                    <BookingDetailsPageButton
                      icon={facebookIcon}
                      children="w-1/3"
                    />
                    <BookingDetailsPageButton
                      icon={googleIcon}
                      children="w-1/3"
                    />
                    <BookingDetailsPageButton
                      icon={appleIcon}
                      children="w-1/3"
                    />
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
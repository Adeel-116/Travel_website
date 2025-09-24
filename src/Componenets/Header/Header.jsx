import React from "react";
import { MdFlight } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { Landinglogo } from "../ImageLink";
import { Link } from "react-router-dom";

function Header() {
  const [isDivVisible, setIsDivVisible] = React.useState(false);

  const handleClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <>
      <header className="w-full sm:p-5">
      <div className="sm:w-100 w-full relative sm:h-auto hidden sm:flex sm:justify-between sm:items-center">
      <div className="flex gap-5">
        <Link to="/flight-details">
          <Button
            value={{
              bg: false,
              buttonText: "Find Flights",
              icon: true,
              iconName: <MdFlight />,
              iconColor: "#ffff",
              rotate: true,
              textColor: "#ffff",
              btnColor: "transparent",
            }}
          />
        </Link>

        <Link to="/coming-soon">
          <Button
            value={{
              bg: false,
              buttonText: "Find Stay",
              icon: true,
              iconName: <IoIosBed />,
              iconColor: "#ffff",
              rotate: false,
              textColor: "#ffff",
            }}
          />
        </Link>
      </div>

      <div className="w-auto h-auto">
        <img src={Landinglogo} alt="Landing logo" />
      </div>

      <div className="flex gap-3">
        <Link to="/login">
          <Button
            value={{
              bg: false,
              buttonText: "Login",
              textColor: "#ffff",
            }}
          />
        </Link>

        <Link to="/signup">
          <Button
            value={{
              bg: true,
              buttonText: "Sign up",
              textColor: "#000",
              btnColor: "#ffff",
            }}
          />
        </Link>
      </div>
    </div>

        {/* Mobile Responsive */}

        <div className="w-full h-auto relative sm:hidden">
          <div className="p-4 flex justify-between ">
            <div className="w-auto h-auto">
              <img src={Landinglogo} alt="image" />
            </div>

            <div className="text-white text-2xl font-semibold flex justify-center items-center">
              <button
                onClick={handleClick}
                className="focus:outline-none relative z-[100]"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>

          {/* Updated sliding div */}
          <div
            className={`absolute z-[101] w-full translate-y-0  bg-navColor  overflow-hidden flex flex-col transition-transform duration-700 ease-in-out ${
              isDivVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
            style={{
              height: isDivVisible ? "auto" : "0px",
            }}
          >
            <div className="flex flex-col items-center space-y-4 p-5">
              <a href="#home" className="text-white text-lg">
                Home
              </a>
             
              <a href="#about" className="text-white text-lg">
                Find Flight
              </a>
           
              <a href="#login" className="text-white text-lg">
                Find Stay
              </a>
              <a href="#signup" className="text-white text-lg">
                Login/Sign
              </a>
              <a href="#find-flight" className="text-white text-lg">
                About US
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

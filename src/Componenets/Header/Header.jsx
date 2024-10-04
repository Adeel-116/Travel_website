import Logo from "../../assets/logo/Group.png";
import { MdFlight } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import Button from "../Button";

function Header() {
  return (
    <>
      <header className="sm:w-100 h-auto hidden sm:flex sm:justify-between sm:items-center">
        <div className="flex gap-5">
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
        </div>

        <div className="w-auto h-auto">
          <img src={Logo} alt="image" />
        </div>

        <div className="flex gap-3">
          <Button
            value={{
              bg: false,
              buttonText: "Login",
              textColor: "#ffff",
            }}
          />

          <Button
            value={{
              bg: true,
              buttonText: "Sign up",
              textColor: "#000",
              btnColor: "#ffff"
            }}
          />
        </div>
      </header>
    </>
  );
}

export default Header;

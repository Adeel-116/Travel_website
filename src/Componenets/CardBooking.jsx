
import Button from "./Button";
import { IoIosSend } from "react-icons/io";

function CardBooking({ backgroundURL, data, para, btnText, onClick }) {
  return (
    <div
      className="sm:w-[460px] w-[288px] h-auto rounded-xl bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <div className="w-full h-auto bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-60 pb-7 rounded-xl">
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center">{data}</h1>
        <p className="sm:w-[80%] w-full mx-auto sm:text-sm text-[10px] text-center text-gray-200 sm:mt-2 mt-1"  >{para}</p>
        <div className="flex justify-center mt-4">
          <Button
            value={{
              bg: true,
              buttonText: btnText,
              icon: true,
              iconName: <IoIosSend />,
              iconColor: "#000",
              rotate: false,
              textColor: "#000",
              btnColor: "#8DD3BB",
              onClick: onClick,
            }}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CardBooking;

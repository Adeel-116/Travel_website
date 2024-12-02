import React from 'react';
import FlightBookButton from './FlightBookButton';
import { Link } from 'react-router-dom';

function FlightDetailsPageCard({ countryName, para, price, pictureUrl }) {
  return (
    <div className="relative lg:w-[23%] w-[47%] md:w-[40%] 2xl:w-[23%] h-auto rounded-lg mb-4">
      <img
        src={pictureUrl}
        className="w-full h-auto bg-cover bg-center bg-no-repeat"
        alt={countryName}
      />

      <div className="absolute w-full h-auto sm:bottom-8 bottom-5">
        <div className="w-[87%] mx-auto h-auto text-white">
          <div className="w-full h-auto flex">
            <div className="w-[75%] h-auto">
              <h1 className="leading-tight 2xl:text-xl text-[12px] sm:text-sm font-medium">{countryName}</h1>
              <p className="2xl:text-[12px] text-[8px] sm:text-sm text-gray-400 font-medium">{para}</p>
            </div>
            <div className="w-[25%] flex justify-end items-end">
              <h2 className="2xl:text-lg text-[12px] sm:text-sm font-medium">$&nbsp;{price}</h2>
            </div>
          </div>
          <Link to="/booking-details">
          <FlightBookButton />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailsPageCard;

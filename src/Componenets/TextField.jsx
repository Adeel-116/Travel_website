import React, { useState } from "react";

function TextField({ labelData, type }) {
  const [fromCity, setFromCity] = useState("Islamabad");
  const [toCity, setToCity] = useState("Karachi");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [trip, setTrip] = useState("Return");

  const cities = ["Lahore", "Karachi", "Islamabad", "Peshawar", "Quetta"];
  const trip_data = ["Return", "one-way", "two-way"];

  // Swap the cities function
  const swapCities = () => {
    const tempCity = fromCity;
    setFromCity(toCity);
    setToCity(tempCity);
  };

  return (
    <div className="flex flex-col gap-[8px]  sm:gap-0 ">
      <label
        htmlFor=""
        className="relative max-w-fit px-1 top-2 xl:left-3  sm:left-2 text-black text-[10px] sm:text-[10px] md:text-[13px] bg-white"
      >
        {labelData}
      </label>

      {/* Flex row container */}
      <div className="flex flex-row justify-center items-center sm:text-sm text-[12px]  md:p-3 p-2.5 border border-black sm:rounded-lg">
        {type === "Select" && (
          <div className="flex flex-row items-center gap-x-14">
            <div>
            <select
              id="from"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="appearance-none"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <span className="mx-2">-</span>

            <select
              id="to"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="appearance-none"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            </div>
            <button
              className="text-[10px] sm:text-[12px] font-bold border-none "
              onClick={swapCities}
            >
              ⇄
            </button>
          </div>
        )}

        {type === "Date" && (
          <div className="flex items-center">
            <input
              type="date"
              id="fromDate"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="px-1 "
            />

            <span className="sm:mx-2 mx-1">-</span>

            <input
              type="date"
              id="toDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="px-1"
            />
          </div>
        )}

        {type === "Trip" && (
          <div className="flex items-center">
            <select
              id="Trip"
              value={trip}
              onChange={(e) => setTrip(e.target.value)}
              className=""
            >
              {trip_data.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextField;

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
    <div className="flex flex-col">
      <label
        htmlFor=""
        className="relative max-w-fit px-1 top-2 left-4 text-black text-sm bg-white"
      >
        {labelData}
      </label>

      {/* Flex row container */}
      <div className="flex flex-row md:gap-x-24 sm:gap-x-10 gap-x-5 p-2 justify-center items-center md:p-3 sm:p-2 border border-black rounded-lg">
        {type === "Select" && (
          <div className="flex flex-row items-center sm:text-lg">
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

            <button
              className="sm:text-xl text-lg font-bold border-none ml-2"
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
              className="border border-gray-300 rounded-md px-2 py-1"
            />

            <span className="mx-2">-</span>

            <input
              type="date"
              id="toDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
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

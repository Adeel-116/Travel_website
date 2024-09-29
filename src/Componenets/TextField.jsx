import React, { useState } from "react";

function TextField({ labelData, type }) {
  const [fromCity, setFromCity] = useState("Islamabad");
  const [toCity, setToCity] = useState("Karachi");

  const [departDate, setDepartDate] = useState("12-9-2003");
  const [returnDate, setReturnDate] = useState("12-9-2004");

  const cities = ["Lahore", "Karachi", "Islamabad", "Peshawar", "Quetta"];

  // Swap the cities function
  const swapCities = () => {
    const tempCity = fromCity;
    setFromCity(toCity);
    setToCity(tempCity);
  };

  return (
    <>
      {/* Div for Flex Columns */}

      <div className="flex flex-col">
        <label
          htmlFor=""
          className="relative max-w-fit px-1 top-2 left-4 text-black text-sm bg-white"
        >
          {labelData}
        </label>

        {/* Div for flex row  */}
        <div className="flex flex-row items-center py-3 px-4 border border-black rounded-lg">

          {type === "Select" && (
            <>
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

              <span className="">-</span>

              <select
                id="to"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="px-1 appearance-none"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <button
                className="text-2xl font-bold p-0 border w-fit border-none ml-44"
                onClick={swapCities}
              >
                ⇄
              </button>
            </>
          )}

          {type === "Date" && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default TextField;

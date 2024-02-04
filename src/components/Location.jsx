import React from "react";
import cloudy from "../assets/cloudy.png";

const CityComponent = ({ updateCity, fetchWeather, fetchForecast }) => {
  return (
    <div className="flex flex-row justify-between items-center sticky top-0 bg-gradient-to-r from-fuchsia-300 to-violet-400 z-10 shadow-xl rounded-b-xl">
      <div className="flex flex-row basis-1/4 justify-center items-center ">
        <img
          src={cloudy}
          alt="Welcome Weather Logo"
          className="w-[45px] h-[45px] mb-10 mx-auto"
        />
        <h2 className="text-2xl font-bold mb-4 text-center">
          Find Weather of your city
        </h2>
      </div>

      <div>
        <form
          className="flex flex-row items-center"
          onSubmit={fetchWeather}
        >
          <input
            type="text"
            className="w-72 h-10 px-4 md-4 text-base text-gray-800 outline-none border border-gray-300 rounded-md mr-2"
            placeholder="City"
            onChange={(e) => updateCity(e.target.value)}
          />
          <button
            className="bg-black hover:bg-gray-900 text-white m-4 py-2 px-4 rounded-md"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default CityComponent;

import React, { useState } from "react";
import Forecast from "./Forecast";
import temp from "../assets/temp.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import pressure from "../assets/pressure.png";
import sunrise from "../assets/sunrise.png";
import weatherIcon from "../assets/weather.png";

const WeatherComponent = (props) => {
  const { weather, forecast } = props;
  const [isCelsius, setIsCelsius] = useState(true); // State for temperature unit
  const isDay = weather?.weather[0].icon?.includes("d");
  const backgroundCLass = isDay ? "bg-daytime" : "bg-nighttime";
  const textColor = isDay ? "text-black" : "text-white";

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000,
    ).getMinutes()}`;
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (kelvin) => {
    if (isCelsius) {
      return `${Math.floor(kelvin - 273)}°C`;
    } else {
      return `${Math.floor(((kelvin - 273) * 9) / 5 + 32)}°F`;
    }
  };

  return (
    <>
      <div
        className={`grid grid-cols-4 pb-10   ${backgroundCLass} bg-opacity-25  bg-cover`}
      >
        {/* city name  */}
        <div className="col-span-4 flex justify-center items-center">
          <div className="flex flex-row justify-center items-center ">
            <Forecast />
            <img
              src={weatherIcon}
              alt="Icon"
              className="w-[45px] h-[45px]"
            />
            <span className={`p-3 capitalize text-3xl font-bold  ${textColor}`}>
              {`${weather?.name}, ${weather?.sys?.country}`}
            </span>
          </div>
        </div>
        {/* temperature */}
        <div
          className={`col-span-4 flex justify-center items-center mb-10 font-bold ${textColor}`}
        >
          <div>
            <span className="capitalize text-14">
              <img
                src={temp}
                alt=""
                className="w-[45px] h-[45px] m-5 mx-auto"
              />
              <span>
                Min temp :- {convertTemperature(weather?.main?.temp_min)} | Max
                temp :- {convertTemperature(weather?.main?.temp_max)}
              </span>{" "}
              |{" "}
              <span className="text-28">
                Temp:-{convertTemperature(weather?.main?.temp)}
              </span>{" "}
              |{" "}
              <button
                onClick={toggleTemperatureUnit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {isCelsius ? "°F" : "°C"}
              </button>{" "}
              | {weather?.weather[0].description}
            </span>
          </div>
        </div>

        {/* sunset/sunrise */}
        <div
          className={`flex justify-center items-center mb-20 font-bold ${textColor}`}
        >
          <img
            src={sunrise}
            alt="Icon"
            className="w-[45px] h-[45px]"
          />
          <div className="flex flex-col text-14 ">
            <span>{isDay ? "Sunset" : "Sunrise"}</span>
            <span>{getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}</span>
          </div>
        </div>
        {/* Humidity */}
        <div
          className={`flex justify-center items-center mb-20 font-bold ${textColor}`}
        >
          <img
            src={humidity}
            alt="Icon"
            className="w-[45px] h-[45px]"
          />
          <div className="flex flex-col text-14 ">
            <span>Humidity</span>
            <span>{weather?.main?.humidity}</span>
          </div>
        </div>
        {/* Wind */}
        <div
          className={`flex justify-center items-center mb-20 font-bold ${textColor}`}
        >
          <img
            src={wind}
            alt="Icon"
            className="w-[45px] h-[45px]"
          />
          <div className="flex flex-col text-14 ">
            <span>Wind</span>
            <span>{weather?.wind?.speed}</span>
          </div>
        </div>
        {/* Pressure */}
        <div
          className={`flex  justify-center items-center mb-20 font-bold ${textColor} `}
        >
          <img
            src={pressure}
            alt="Icon"
            className="w-[45px] h-[45px]"
          />
          <div className="flex flex-col text-14 m-15">
            <span>Pressure</span>
            <span>{weather?.main?.pressure}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;

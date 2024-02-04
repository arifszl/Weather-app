import React from "react";

const Forecast = ({ forecast, weather }) => {
  if (!forecast || !forecast.list) return null;

  const isDay = weather?.weather[0].icon?.includes("d");
  const backgroundCLass = isDay ? "bg-daytime" : "bg-nighttime";
  const textColor = isDay ? "text-black" : "text-white";

  const today = new Date();
  const nextFiveDays = [];
  const processedDates = [];

  forecast.list.forEach((item) => {
    const itemDate = new Date(item.dt_txt);
    const itemDay = itemDate.toDateString(); // Get the date part only

    // Check if the date has already been processed
    if (!processedDates.includes(itemDay)) {
      const timeDifference = itemDate.getTime() - today.getTime();
      const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

      // Ensure the date is within the next 5 days
      if (dayDifference >= 0 && dayDifference < 5) {
        nextFiveDays.push(item);
        processedDates.push(itemDay); // Add the processed date to the list
      }
    }
  });

  // Limit the array to the first 5 items
  const limitedForecast = nextFiveDays.slice(0, 5);
  console.log(limitedForecast);

  console.log(nextFiveDays);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">5-Day Weather Forecast</h2>
      <div className="grid grid-cols-5 gap-4">
        {limitedForecast.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2">
              {new Date(item.dt_txt).toDateString()}
            </h3>
            <p className="text-gray-700">Temperature: {item.main.temp} °C</p>
            <p className="text-gray-700">
              Weather: {item.weather[0].description}
            </p>
            {/* <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="Weather Icon"
              className="w-12 h-12 mt-2"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

import CityComponents from "./components/Location.jsx";
import { useState, useEffect } from "react";
import WeatherInfo from "./components/WeatherInfo.jsx";
import main from "./assets/main.jpg";
import Forecast from "./components/Forecast.jsx";

function App() {
  const [city, setCity] = useState("Mau");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const updateCity = (city) => {
    setCity(city);
  };
  const fetchWeather = async (e) => {
    fetchForecast();
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87c588ad2a460f8a60179b02c5b87991`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchForecast = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=87c588ad2a460f8a60179b02c5b87991`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setForecast(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  const isDay = weather?.weather?.[0]?.icon?.includes("d");
  const backgroundCLass = isDay ? "bg-daytime" : "bg-nighttime";
  return (
    <div className={`${backgroundCLass}`}>
      <CityComponents
        updateCity={updateCity}
        fetchWeather={fetchWeather}
        fetchForecast={fetchForecast}
      />
      {weather?.main ? (
        <>
          <WeatherInfo
            weather={weather}
            forecast={forecast}
          />
          <Forecast
            forecast={forecast}
            weather={weather}
          />
        </>
      ) : (
        <div className="fixed top-14 h-screen  w-screen flex justify-center items-center text-3xl  bg-main bg-cover">
          <h2>Search weather for you city</h2>
        </div>
      )}
    </div>
  );
}

export default App;

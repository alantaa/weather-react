import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { SpinnerCircularSplit } from "spinners-react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function handleResponse(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2ada9023ee6b674c5142a0f7109917e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  const form = (
    <form onSubmit={handleResponse}>
      <input
        type="search"
        className="form-control "
        placeholder="Enter a city..."
        aria-label="Search"
        aria-describedby="search-addon"
        autoFocus="on"
        onChange={updateCity}
      />
    </form>
  );

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row justify-content-between">
          <span className="form1 mb-5 ">{form}</span>
          <div className="col-sm-4 list1">
            <ul>
              <li>
                <WeatherIcon
                  code={weather.icon}
                  size={70}
                  alt={weather.description}
                />{" "}
              </li>

              <li className="text-capitalize">{weather.description}</li>
              <li className="city">{weather.name}</li>

              <li>
                <CurrentTemp celsius={weather.temp} />
              </li>
              <li>
                <FormattedDate date={weather.date} />
              </li>
            </ul>
            <span className="form2">{form}</span>
          </div>

          <div className="col-sm-3 list2">
            <ul className="list2">
              <li>
                Humidity
                <br />
                <strong>{weather.humidity}%</strong>
              </li>
              <li>
                Wind Speed <br />
                <strong>{weather.wind} km/h</strong>
              </li>

              <li>
                Air Pressure
                <br />
                <strong>{weather.pressure} PS</strong>
              </li>
              <li>
                Feels like <br />
                <strong>{Math.round(weather.feels)}°C</strong>
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <SpinnerCircularSplit
          size={90}
          thickness={150}
          speed={100}
          color="rgba(255, 255, 255, 1)"
          secondaryColor="rgba(255, 255, 255, 0.5)"
        />
      </div>
    );
  }
}

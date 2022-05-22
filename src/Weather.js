import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
          <div className="col-md-3 list1">
            <ul>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>

              <li className="text-capitalize">{weather.description}</li>
              <li className="city">{weather.name}</li>

              <li className="currentTemp">{Math.round(weather.temp)}°C</li>
              <li>
                <FormattedDate date={weather.date} />
              </li>
            </ul>
            {form}
          </div>

          <div className="col-md-2 list2">
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

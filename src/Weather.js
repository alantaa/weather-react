import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      ready: true,
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
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2ada9023ee6b674c5142a0f7109917e0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row justify-content-between">
          <div className="col-2 list1">
            <ul>
              <li>
                {" "}
                <img src={weather.icon} alt={weather.description} />
              </li>
              <li>{weather.description}</li>
              <li>{weather.name}</li>
              <li>{Math.round(weather.temp)}°C</li>
            </ul>
            <form onSubmit={handleResponse}>
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                aria-label="Search"
                aria-describedby="search-addon"
                autoFocus="on"
                onChange={updateCity}
              />
            </form>
          </div>

          <div className="col-2 list2">
            <ul className="list2">
              <li>
                Humidity
                <br />
                <strong>{weather.humidity}%</strong>
              </li>
              <li>
                Wind Speed <br />
                <strong>{weather.wind} kM/h</strong>
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

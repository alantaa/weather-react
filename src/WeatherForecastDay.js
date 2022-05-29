import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    const temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    const temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <div className="Forecast-temps">
        <span className="Forecast-temp-max">{maxTemp()} </span>
        <span className="Forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}

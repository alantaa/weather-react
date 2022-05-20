import React from "react";
import "./Weather.css";

export default function Weather() {
  const form = (
    <form>
      <input type="search" placeholder="Enter a city..." />
    </form>
  );
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Icon</li>
            <li>Description</li>
            <li>London</li>
            <li>20C</li>
            <li>{form}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity</li>
            <li>Wind Speed</li>
            <li>Air Pressure</li>
            <li>Chance of rain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

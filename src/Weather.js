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
      <div className="row justify-content-between">
        <div className="col-2 list1">
          <ul>
            <li>Icon </li>
            <li>Description</li>
            <li>London</li>
            <li>20C</li>
            <li>{form}</li>
          </ul>
        </div>
        <div className="col-2 list2">
          <ul className="list2">
            <li>
              Humidity
              <br />
              <strong>50%</strong>
            </li>
            <li>
              Wind Speed <br />
              <strong>5m/m</strong>
            </li>

            <li>
              Air Pressure
              <br />
              <strong>50PS</strong>
            </li>
            <li>
              Chance of Rain
              <br />
              <strong>5%</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

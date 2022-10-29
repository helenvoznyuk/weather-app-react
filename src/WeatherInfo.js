import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card text-end border-secondary mb-3 city-card">
        <div className="card-body">
          <h1 id="entered-location">{props.data.city}</h1>
          <div className="wrap-date">
            <span className="current-date" id="current-date">
              <FormattedDate date={props.data.date} />
            </span>
          </div>

          <div className="card temperature-block">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <img
                    src={props.data.iconUrl}
                    id="icon"
                    alt={props.data.description}
                  />

                  <span
                    className="weather-condition text-capitalize"
                    id="weather-condition"
                  >
                    {props.data.description}
                  </span>
                </div>
                <div className="col-6">
                  <WeatherTemperature celsius={props.data.temperature} />
                  <ul>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">
                        {Math.round(props.data.humidity)}
                      </span>
                      %
                    </li>
                    <li>
                      Wind: <span id="wind">{Math.round(props.data.wind)}</span>{" "}
                      km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

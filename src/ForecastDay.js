import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forecast.css";
import "./App.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <span className="day">{day()}</span>
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          id="forecast-icon"
          alt={props.data.condition.icon}
        />
      </div>
      <span className="temp-max temperature-monday">{maxTemperature()} | </span>
      <span className="temp-min temperature-monday">{minTemperature()}</span>
    </div>
  );
}

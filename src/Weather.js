import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: 17,
    date: "Monday 9:00",
    description: "Cloudy",
    imgUrl: "https://openweathermap.org/img/wn/03n@2x.png",
    humidity: 80,
    wind: 15,
  };

  return (
    <div className="Weather">
      <div className="card text-end border-secondary mb-3 city-card">
        <div className="card-body">
          <h1 id="entered-location">Kyiv</h1>
          <div className="wrap-date">
            <span className="current-date" id="current-date">
              {weatherData.date}
            </span>
          </div>

          <div className="card temperature-block">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <img src={weatherData.imgUrl} id="icon" alt="cloud" />

                  <span className="weather-condition" id="weather-condition">
                    {weatherData.description}
                  </span>
                </div>
                <div className="col-6">
                  <span id="main-temperature">{weatherData.temperature}</span>

                  <span id="celsius-link">°C </span>

                  <ul>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span> km/h
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

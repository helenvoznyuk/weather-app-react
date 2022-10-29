import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import Map from "./Map";
import "./Map.css";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <div className="card border-secondary mb-3 map-card">
              <div className="card-body">
                <div className="Search">
                  <form id="city-input-form">
                    <div className="row">
                      <div className="col-8">
                        <input
                          type="search"
                          placeholder="Enter a city"
                          id="city-input"
                          className="form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="submit"
                          value="Search"
                          id="city-input-button"
                          className="btn btn-primary"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <Map />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-end border-secondary mb-3 city-card">
              <div className="card-body">
                <h1 id="entered-location">{weatherData.city}</h1>
                <div className="wrap-date">
                  <span className="current-date" id="current-date">
                    <FormattedDate date={weatherData.date} />
                  </span>
                </div>

                <div className="card temperature-block">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={weatherData.iconUrl}
                          id="icon"
                          alt={weatherData.description}
                        />

                        <span
                          className="weather-condition"
                          id="weather-condition"
                        >
                          {weatherData.description}
                        </span>
                      </div>
                      <div className="col-6">
                        <span id="main-temperature">
                          {Math.round(weatherData.temperature)}
                        </span>

                        <span id="celsius-link">°C </span>

                        <ul>
                          <li>
                            Humidity:{" "}
                            <span id="humidity">
                              {Math.round(weatherData.humidity)}
                            </span>
                            %
                          </li>
                          <li>
                            Wind:{" "}
                            <span id="wind">
                              {Math.round(weatherData.wind)}
                            </span>{" "}
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

          <Forecast />
        </div>

        <div className="Footer">
          <div className="signature">
            <a
              href="https://github.com/helenvoznyuk/weather-app-react"
              id="my-github-project"
              target="”_blank”"
            >
              Open-source code
            </a>{" "}
            by Helen Voznyuk
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "dd339t2a63a34246b1fbc1f12o2030e0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

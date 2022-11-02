import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import Map from "./Map";
import "./Forecast.css";
import "./Map.css";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "dd339t2a63a34246b1fbc1f12o2030e0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
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
                  <form id="city-input-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-8">
                        <input
                          type="search"
                          placeholder="Enter a city"
                          id="city-input"
                          className="form-control"
                          autoComplete="off"
                          autoFocus="on"
                          onChange={handleCityChange}
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
            <WeatherInfo data={weatherData} />
          </div>
        </div>

        <Forecast coordinates={weatherData.coordinates} />

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
    search();
    return "Loading...";
  }
}

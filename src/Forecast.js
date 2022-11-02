import React from "react";
import "./Forecast.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "dd339t2a63a34246b1fbc1f12o2030e0";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="card border-secondary mb-3 days-card">
        <div className="card-body">
          <div className="row">
            <div className="card day-one" id="day-one">
              <div className="card-body">
                <span className="monday">Monday</span>
                <div className="forecast-icon">
                  <i className="fa-solid fa-cloud-sun icon-cloud-sun"></i>
                </div>
                <span className="temp-max temperature-monday">21° | </span>
                <span className="temp-min temperature-monday">9°</span>
              </div>
            </div>

            <div className="card day-one" id="day-two">
              <div className="card-body">
                <span className="monday">Monday</span>
                <div className="forecast-icon">
                  <i className="fa-solid fa-cloud-sun icon-cloud-sun"></i>
                </div>
                <span className="temp-max temperature-monday">21° | </span>
                <span className="temp-min temperature-monday">9°</span>
              </div>
            </div>

            <div className="card day-one" id="day-three">
              <div className="card-body">
                <span className="monday">Monday</span>
                <div className="forecast-icon">
                  <i className="fa-solid fa-cloud-sun icon-cloud-sun"></i>
                </div>
                <span className="temp-max temperature-monday">21° | </span>
                <span className="temp-min temperature-monday">9°</span>
              </div>
            </div>

            <div className="card day-one" id="day-four">
              <div className="card-body">
                <span className="monday">Monday</span>
                <div className="forecast-icon">
                  <i className="fa-solid fa-cloud-sun icon-cloud-sun"></i>
                </div>
                <span className="temp-max temperature-monday">21° | </span>
                <span className="temp-min temperature-monday">9°</span>
              </div>
            </div>

            <div className="card day-one" id="day-five">
              <div className="card-body">
                <span className="monday">Monday</span>
                <div className="forecast-icon">
                  <i className="fa-solid fa-cloud-sun icon-cloud-sun"></i>
                </div>
                <span className="temp-max temperature-monday">21° | </span>
                <span className="temp-min temperature-monday">9°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

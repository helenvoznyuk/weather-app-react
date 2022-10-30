import React from "react";
import "./Forecast.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
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

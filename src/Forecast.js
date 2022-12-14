import React, { useState, useEffect } from "react";
import "./Forecast.css";
import "./App.css";
import ForecastDay from "./ForecastDay";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="card border-secondary mb-3 days-card">
          <div className="card-body">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="card day-one" id="day-one-card" key={index}>
                      <div className="card-body">
                        <ForecastDay data={dailyForecast} />
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dd339t2a63a34246b1fbc1f12o2030e0";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Spinner">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#5090FD", "#5090FD", "#5090FD", "#5090FD", "#5090FD"]}
        />
      </div>
    );
  }
}

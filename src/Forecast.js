import React from "react";
import "./Forecast.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card border-secondary mb-3 days-card" id="forecast"></div>
    </div>
  );
}

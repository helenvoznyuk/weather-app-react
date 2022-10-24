import React from "react";
import Search from "./Search";
import Map from "./Map";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <div className="card border-secondary mb-3 map-card">
            <div className="card-body">
              <Search />
              <Map />
            </div>
          </div>
        </div>
        <div className="col-6">
          <Weather />
        </div>
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

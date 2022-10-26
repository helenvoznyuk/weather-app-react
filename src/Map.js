import React from "react";
import "./Map.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Map() {
  return (
    <div className="Map">
      <br />
      <div className="card map-block">
        <div className="card-body map-image">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/12/54/world-map-146505__340.png"
            alt="map"
            width="260px"
          />
        </div>
      </div>
    </div>
  );
}

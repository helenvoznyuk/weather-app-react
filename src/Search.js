import React from "react";
import "./Search.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
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
  );
}

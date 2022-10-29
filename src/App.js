import React from "react";

import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
    </div>
  );
}

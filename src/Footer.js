import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
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
  );
}

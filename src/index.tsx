import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/_all.scss";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Router />
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// * This is the entry point for the app
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../components/App";
import "../css/index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("App")
);

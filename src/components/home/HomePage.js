import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  // * The jumbotron className comes w/ bootstrap which gives a large greeting
  <div className="jumbotron">
    <h1>React Github Actions</h1>
    <h2>Added this to test ci flow</h2>
    <p>This is just a react sample app</p>

    <Link to="about" className="btn btn-primary btn-lg">
      Learn Mas
    </Link>
  </div>
);

export default HomePage;

import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import "./css/font-awesome.min.css";
//import App from './App';
import Login from "./login";
import Home from "./home";
import Infop from "./infop";
// import "./css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/ShowBook/" element={<Login />} />
      <Route path="/ShowBook/home/:user" element={<Home />} />
      <Route path="/ShowBook/infop/:uname/:sid" element={<Login />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

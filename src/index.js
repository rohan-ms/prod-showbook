import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
//import App from './App';
import Login from "./login";
import Home from "./home";
import Infop from "./infop";
// import "./css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/ShowBook/" component={Login} />
    <Route path="/ShowBook/home/:user" component={Home} />
    <Route path="/ShowBook/infop/:uname/:sid" component={Infop} />
  </Router>,
  document.getElementById("root")
);

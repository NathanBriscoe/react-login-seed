import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Notfound from "./notfound";
// index.js file, which we’ll use as the entry point for our server.
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from "./Users/Login";
import { Register } from "./Users/Register";
import { Dashboard } from "./Dashboard/Dashboard";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from "./Users/Login";
import { Register } from "./Users/Register";
import { Dashboard } from "./Dashboard/Dashboard";
import { AdminOverview } from "./AdminOverview/AdminOverview";
import withAuth from "./withAuth";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />

      <Route exact path="/dashboard/admin/overview" component={AdminOverview} />

      <Route exact path="/" component={withAuth(Dashboard)} />
    </Switch>
  </Router>
);

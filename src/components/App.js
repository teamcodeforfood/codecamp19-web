import React from "react";
import { Route, Switch } from "react-router-dom";

import withAuth from "./withAuth";

import { Login } from "./Users/Login";
import { Register } from "./Users/Register";
import { Dashboard } from "./Dashboard/Dashboard";
import { AdminOverview } from "./AdminOverview/AdminOverview";
import { EventDetail } from "./Event/EventDetail";
import { EventList } from "./Event/EventList";
import { Teams } from "./Teams/Teams";
import { TeamPage } from "./Teams/TeamPage";

export const App = () => (
  <Switch>
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />

    <Route path="/events/:id" component={EventDetail} />
    <Route path="/events" component={EventList} />
    <Route exact path="/dashboard/admin/overview" component={AdminOverview} />
    <Route exact path="/teams" component={Teams} />
    <Route exact path="/teams/teamid" component={TeamPage} />

    <Route exact path="/" component={withAuth(Dashboard)} />
  </Switch>
);

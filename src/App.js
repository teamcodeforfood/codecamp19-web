import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Login } from "./components/Users/Login";
import { Register } from "./components/Users/Register";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

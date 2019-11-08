import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          Hello there
        </Route>
      </Switch>
    </div>
  );
}

export default App;

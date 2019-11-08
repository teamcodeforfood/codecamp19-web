import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { AdminOverview } from "../AdminOverview/AdminOverview";
import { AppHeader } from "../Layout/AppHeader";

export const Dashboard = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      <AppHeader />

      {user.role === "admin" ? (
        <>
          <Route exact path="/overview" component={AdminOverview} />
          <Route exact path="/" component={AdminOverview} />
        </>
      ) : null}

      {user.role === "judge" ? <>ur a judge</> : null}

      {user.role === "participant" ? <>ur a participant</> : null}
    </>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "amino-ui";
import { Route } from "react-router-dom";

import { AdminOverview } from "../AdminOverview/AdminOverview";
import { AppHeader } from "../Layout/AppHeader";
import { AdminSetup } from "../AdminSetup/AdminSetup";
import withAuth from "../withAuth";

export const Dashboard = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      <AppHeader />

      {user.role === "admin" ? (
        <ResponsiveContainer>
          <Route path="/overview" component={withAuth(AdminOverview)} />
          <Route path="/setup" component={withAuth(AdminSetup)} />
          <Route exact path="/" component={withAuth(AdminOverview)} />
        </ResponsiveContainer>
      ) : null}

      {user.role === "judge" ? <>ur a judge</> : null}

      {user.role === "participant" ? <>ur a participant</> : null}
    </>
  );
};

// https://reacttraining.com/react-router/web/api/Redirect

import React from "react";
import { Route, Redirect } from "react-router-dom";

import { app } from "../../app";

function PrivateRoute({ children, ...rest }) {
  const { user } = app.state;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

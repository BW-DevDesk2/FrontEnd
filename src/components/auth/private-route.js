// https://reacttraining.com/react-router/web/api/Redirect

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AppContext } from "../../app";

function PrivateRoute({ children, ...rest }) {
  const app = useContext(AppContext);
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
              pathname: "/signup",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

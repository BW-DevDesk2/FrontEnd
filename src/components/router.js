import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import PrivateRoute from "./auth/private-route";
import LoginForm from "./auth/login";
import Logout from "./auth/logout";
import SignUpForm from "./auth/register";
import Header from "./header";
import Tabs from "./tabs";
import Dashboard from "./dashboard";
import UserProfile from "./UserProfile";

//  Ticket Components
import Ticket from "./ticket/ticket";
import CreateTicket from "./ticket/create-ticket";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          {/* unauthenticated */}
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          {/* authenticated */}
          <PrivateRoute>
            <Tabs />
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/create-ticket" component={CreateTicket} />
              <Route path="/ticket/:id" component={Ticket} />
              <Redirect to="/dashboard" />
            </Switch>
          </PrivateRoute>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Router;

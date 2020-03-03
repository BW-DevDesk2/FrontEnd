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

function Router(props) {
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
              <Route path={["/search/:term/:page", "/search/:term", "/search"]}>
                <h2>Search</h2>
                <ol className="search-results">
                  <li>Ticket 1</li>
                  <li>Ticket 2</li>
                  <li>Ticket 3</li>
                </ol>
              </Route>
              <Route path="/profile">
                <UserProfile />
                <h2>UserProfile</h2>
                <ol className="ticket-list">
                  <li>Ticket 1</li>
                  <li>Ticket 2</li>
                  <li>Ticket 3</li>
                </ol>
              </Route>
              <Route path="/create-ticket" component={CreateTicket} />
              <Route path={["/ticket/:id/edit", "/ticket/:id"]}>
                <h2>Edit / View Ticket</h2>
                <Ticket />
              </Route>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
            </Switch>
          </PrivateRoute>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Router;

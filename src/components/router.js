import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import PrivateRoute from "./auth/private-route";
import Header from "./header";
import Tabs from "./tabs";
import Dashboard from "./dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          {/* unauthenticated */}
          <Route path="/login">
            <h2>Login</h2>
          </Route>
          <Route path="/signup">
            <h2>Signup</h2>
          </Route>
          {/* authenticated */}
          <PrivateRoute>
            <Tabs />
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path={["/search/:term/:page", "/search/:term", "/search"]}>
              <h2>Search</h2>
              <ol className="search-results">
                <li>Ticket 1</li>
                <li>Ticket 2</li>
                <li>Ticket 3</li>
              </ol>
            </Route>
            <Route path="/user/:id">
              <h2>UserProfile</h2>
              <ol className="ticket-list">
                <li>Ticket 1</li>
                <li>Ticket 2</li>
                <li>Ticket 3</li>
              </ol>
            </Route>
            <Route path={["/ticket/new", "/ticket/:id/edit", "/ticket/:id"]}>
              <h2>Create / Edit / View Ticket</h2>
            </Route>
            <Redirect to="/dashboard" />
          </PrivateRoute>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Router;
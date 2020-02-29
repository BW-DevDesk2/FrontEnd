import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <h1>DevDesk</h1>
        {/* <SearchBar /> */}
        <main className="main">
          {/* <Tabs /> */}
          <Switch>
            <Route path="/dashboard">
              <h2>Dashboard</h2>
            </Route>
            <Route path={["/search/:term/:page", "/search/:term", "/search"]}>
              <h2>Search</h2>
            </Route>
            <Route exact path="/user">
              <h2>UserProfile</h2>
            </Route>
            <Route path={["/ticket/new", "/ticket/:id/edit", "/ticket/:id"]}>
              <h2>Ticket</h2>
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

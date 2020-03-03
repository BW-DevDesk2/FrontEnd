import React, { Component } from "react";
import Router from "./components/router";

class App extends Component {
  constructor() {
    let user;
    try {
      user = JSON.parse(localStorage.getItem("user"));
    } catch {}

    super();
    this.state = {
      user
    };
  }

  render() {
    return (
      <AppContext.Provider value={this}>
        <UserContext.Provider value={this.state.user}>
          <Router />
        </UserContext.Provider>
      </AppContext.Provider>
    );
  }
}

export const AppContext = React.createContext();
export const UserContext = React.createContext();
export default App;

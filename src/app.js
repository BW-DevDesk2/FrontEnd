import React, { Component } from "react";
import Router from "./components/router";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <AppContext.Provider value={this}>
        <Router />
      </AppContext.Provider>
    );
  }
}

export const AppContext = React.createContext();
export default App;

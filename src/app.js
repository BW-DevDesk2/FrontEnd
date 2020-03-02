import React, { Component } from "react";
import Router from "./components/router";

class App extends Component {
  constructor() {
    super();
    app = this;
    this.state = {
      user: null
    };
  }

  render() {
    return <Router />;
  }
}

export let app;
export default App;

import React, { Component } from "react";
import Router from "./components/router";

class App extends Component {
  constructor() {
    super();
    app = this;
    this.state = {
      user: {}
    };
  }

  render() {
    return <Router />;
  }
}

export let app; // TODO: replace with Context API
export default App;

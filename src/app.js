import React, { Component } from "react";
import axios from "axios";

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

  login(user) {
    this.setState({ user });
  }

  logout() {
    this.setState({ user: null });
  }

  getAuth() {
    const { user } = this.state;
    return {
      user,
      login: this.login.bind(this),
      logout: this.logout.bind(this),
      axios: axios.create({
        // axios config
        baseURL: "https://devdesk2eli.herokuapp.com/",
        headers: {
          authorization: user && user.token
        }
      })
    };
  }

  render() {
    return (
      <AppContext.Provider value={this}>
        <AuthContext.Provider value={this.getAuth.bind(this)}>
          <UserContext.Provider value={this.state.user}>
            <Router />
          </UserContext.Provider>
        </AuthContext.Provider>
      </AppContext.Provider>
    );
  }
}

export const AppContext = React.createContext();
export const AuthContext = React.createContext();
export const UserContext = React.createContext();
export default App;

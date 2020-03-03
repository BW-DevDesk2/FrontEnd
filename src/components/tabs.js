import React from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../app";

function Tabs(props) {
  return (
    <nav className="tabs">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/user/id">User</NavLink>
      <NavLink to="/ticket">Ticket</NavLink>
    </nav>
  );
}

export default Tabs;

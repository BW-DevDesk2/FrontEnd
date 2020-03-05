import React from "react";
import { NavLink } from "react-router-dom";

function Tabs(props) {
  return (
    <nav className="tabs">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/create-ticket">Create Ticket</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/ticket" className="display-active">
        Ticket
      </NavLink>
    </nav>
  );
}

export default Tabs;

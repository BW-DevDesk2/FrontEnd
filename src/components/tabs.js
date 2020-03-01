import React from "react";
import { NavLink } from "react-router-dom";

function Tabs(props) {
  console.log("props", props);
  return (
    <nav className="tabs">
      <NavLink to="/tickets">Tickets</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/user/username">User</NavLink>
      <NavLink to="/ticket/1">Ticket</NavLink>
    </nav>
  );
}

export default Tabs;

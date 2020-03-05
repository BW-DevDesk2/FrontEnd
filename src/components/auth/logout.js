import React, { useContext } from "react";
import { AuthContext } from "../../app";

function Logout() {
  const { logout } = useContext(AuthContext)();

  logout();

  return <h2>Logged out</h2>;
}

export default Logout;

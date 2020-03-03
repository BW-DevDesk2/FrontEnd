import React, { useContext } from "react";
import { AuthContext } from "../../app";

function Logout() {
  const { logout } = useContext(AuthContext)();

  try {
    localStorage.removeItem("user");
  } catch {}
  logout();

  return <h2>Logged out</h2>;
}

export default Logout;

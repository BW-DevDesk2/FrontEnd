import React, { useContext } from "react";
import { AppContext } from "../../app";

function Logout() {
  const app = useContext(AppContext);

  try {
    localStorage.removeItem("user");
  } catch {}
  app.setState({ user: null });

  return <h2>Logged out</h2>;
}

export default Logout;

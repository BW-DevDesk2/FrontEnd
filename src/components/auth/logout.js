import React, { useContext, useEffect } from "react";
import { AppContext } from "../../app";

function Logout() {
  const app = useContext(AppContext);

  useEffect(() => {
    app.setState({ user: null });
  }, [app]);

  return <h2>Logged out</h2>;
}

export default Logout;

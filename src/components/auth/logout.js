import React, { useContext, useEffect } from "react";
import { AppContext } from "../../app";

function Logout() {
  const app = useContext(AppContext);

  useEffect(() => {
    app.setState({ user: null });
  }, []);

  return <h1>Logout</h1>;
}

export default Logout;

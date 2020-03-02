import React, { useContext, useEffect } from "react";
import { AppContext } from "../../app";

function Login() {
  const app = useContext(AppContext);

  useEffect(() => {
    app.setState({ user: { id: 42 } });
  }, [app]);

  return <h2>Logged In!!!</h2>;
}

export default Login;

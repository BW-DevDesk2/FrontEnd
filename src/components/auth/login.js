import React, { useContext, useEffect } from "react";
import { AppContext } from "../../app";

function Login() {
  const app = useContext(AppContext);

  useEffect(() => {
    app.setState({ user: { id: 42 } });
  }, []);

  return <h1>Logged In!!!</h1>;
}

export default Login;

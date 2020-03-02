import React, { useContext, useEffect } from "react";

import LoginForm from "./login-form";
import { AppContext } from "../../app";

function Login() {
  const app = useContext(AppContext);

  // useEffect(() => {
  //   app.setState({ user: { id: 42 } });
  // }, [app]);

  return <LoginForm />;
}

export default Login;

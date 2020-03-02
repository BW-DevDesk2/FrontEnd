import React, { useContext } from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";

import { AppContext } from "../../app";

function LoginForm(props) {
  const app = useContext(AppContext);
  const { history } = props;
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ({ email, password }) => {
    axios.post("/api/login", { email, password }).then(response => {
      console.log(response);
      const user = response.data;
      app.setState({ user });
      history.push("/dashboard");
    });
  };

  return (
    <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="email">Email</Label>
        <input
          className="form-control"
          name="email"
          type="email"
          id="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        <span className="error">{errors.email && errors.email.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          ref={register({
            required: "Required",
            validate: value => value !== "password" || "Use a better password"
          })}
        />
        <span className="error">
          {errors.password && errors.password.message}
        </span>
      </FormGroup>

      <Button type="submit" color="primary" size="lg" block>
        Login
      </Button>
      <Button
        color="info"
        size="lg"
        block
        onClick={() => history.push("/signup")}
      >
        Sign Up
      </Button>
    </form>
  );
}

export default LoginForm;

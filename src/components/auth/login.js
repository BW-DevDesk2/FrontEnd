import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";

import { AuthContext } from "../../app";

function LoginForm(props) {
  const { axios, login } = useContext(AuthContext)();
  const { history } = props;
  const { handleSubmit, register, errors, setError } = useForm();

  const onSubmit = values => {
    console.log(values);
    axios
      .post("/api/login", values)
      .then(response => {
        console.log(response);
        const user = response.data;
        login(user);
        history.push("/dashboard");
        try {
          localStorage.setItem("user", JSON.stringify(user));
        } catch {}
      })
      .catch(({ response }) => {
        console.dir(response.status);
        if (response.status === 401) {
          setError(
            "password",
            "unauthorized",
            "There was a problem with your login info"
          );
        } else {
          setError(
            "password",
            "login_problem",
            "There was a problem logging in"
          );
        }
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

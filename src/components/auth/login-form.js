import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
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
        {errors.email && errors.email.message}
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
            validate: value => value !== "password" || "Nice try!"
          })}
        />
        {errors.password && errors.password.message}
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
        Signup
      </Button>
    </form>
  );
}

export default LoginForm;

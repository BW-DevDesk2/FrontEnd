import React, { useContext } from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";

import { AppContext } from "../../app";

function SignUpForm(props) {
  const app = useContext(AppContext);
  const { history } = props;
  const { handleSubmit, register, errors } = useForm({
    defaultValues: { role: "Choose one" }
  });

  const onSubmit = values => {
    console.log(values);
    axios.post("/api/register", values).then(response => {
      console.log(response);
      const user = response.data;
      app.setState({ user });
      history.push("/dashboard");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch {}
    });
  };

  return (
    <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <input
          className="form-control"
          name="name"
          type="name"
          id="name"
          placeholder="Your Name"
          ref={register({
            required: "Required"
          })}
        />
        <span className="error">{errors.name && errors.name.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <input
          className="form-control"
          name="email"
          type="email"
          id="email"
          placeholder="you@example.com"
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
      {/* <FormGroup>
        <Label for="select">Role</Label>
        <select
          id="select"
          className="form-control"
          type="select"
          name="role"
          ref={register({
            required: "Required",
            validate: value => value !== "Choose one" || "Please select a role"
          })}
        >
          <option disabled>Choose one</option>
          <option>Student</option>
          <option>Helper</option>
          <option>Admin</option>
        </select>
        <span className="error">{errors.role && errors.role.message}</span>
      </FormGroup> */}
      <Button type="submit" color="primary" size="lg" block>
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;

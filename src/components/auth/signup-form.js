import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";
import { useHistory } from "react-router-dom";

function SignUpForm(props) {
  const history = useHistory();
  console.log(props);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: { role: "Choose one" }
  });
  const onSubmit = values => {
    console.log(values);
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
      <FormGroup>
        <Label for="select">Role</Label>
        <select
          id="select"
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
      </FormGroup>
      <Button
        type="submit"
        color="primary"
        size="lg"
        block
        onClick={() => history.push("/signup")}
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;

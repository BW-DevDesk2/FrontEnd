import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, FormGroup, Label, Spinner } from "reactstrap";

import { AuthContext } from "../../app";

function SignUpForm(props) {
  const { axios, login } = useContext(AuthContext)();
  const [loading, setLoading] = useState(false);
  const { history } = props;

  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter a valid email address"
      )
      .required("Please enter a valid email address"),
    password: yup.string().required("Please enter a password"),
    role: yup.string().notOneOf(["Choose one"], "Please select a role")
  });

  const { handleSubmit, register, errors } = useForm({
    defaultValues: { role: "Choose one" },
    validationSchema: schema
  });

  const onSubmit = values => {
    setLoading(true);
    delete values.role;
    axios.post("/api/register", values).then(response => {
      console.log(response);
      const user = response.data;
      login(user);
      history.push("/dashboard");
    });
  };

  return (
    <>
      <form className="form auth-form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <input
            className="form-control"
            name="name"
            type="name"
            id="name"
            placeholder="Your Name"
            ref={register()}
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
            ref={register()}
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
            ref={register()}
          />
          <span className="error">
            {errors.password && errors.password.message}
          </span>
        </FormGroup>
        <FormGroup>
          <Label for="select">Role</Label>
          <select
            id="select"
            className="form-control"
            type="select"
            name="role"
            ref={register()}
          >
            <option disabled>Choose one</option>
            <option>Student</option>
            <option>Helper</option>
            <option>Admin</option>
          </select>
          <span className="error">{errors.role && errors.role.message}</span>
        </FormGroup>
        {!loading && (
          <Button type="submit" color="primary" size="lg" block>
            Sign Up
          </Button>
        )}
      </form>
      {loading && <Spinner color="primary" />}
    </>
  );
}

export default SignUpForm;

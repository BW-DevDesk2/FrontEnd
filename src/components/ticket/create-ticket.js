import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";

import { AuthContext } from "../../app";

function SignUpForm(props) {
  const { axios, login } = useContext(AuthContext)();
  const { history } = props;
  const { handleSubmit, register, errors } = useForm({
    defaultValues: { category: "Choose one" }
  });

  const onSubmit = values => {
    console.log(values);
    // delete values.role; // delete role until backend can handle it
    // axios.post("/api/register", values).then(response => {
    //   console.log(response);
    //   const user = response.data;
    //   login(user);
    //   history.push("/dashboard");
    //   try {
    //     localStorage.setItem("user", JSON.stringify(user));
    //   } catch {}
    // });
  };

  return (
    <form className="form create-ticket" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="title">Title</Label>
        <input
          className="form-control"
          name="title"
          type="title"
          id="title"
          ref={register({
            required: "Required"
          })}
        />
        <span className="error">{errors.title && errors.title.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <textarea
          className="form-control"
          name="description"
          type="description"
          id="description"
          placeholder="Include a brief description and what you've already tried"
          ref={register({
            required: "Required"
          })}
        ></textarea>
        <span className="error">
          {errors.description && errors.description.message}
        </span>
      </FormGroup>
      <FormGroup>
        <Label for="category">Category</Label>
        <select
          id="category"
          className="form-control"
          type="select"
          name="category"
          ref={register({
            required: "Required",
            validate: value =>
              value !== "Choose one" || "Please select a category"
          })}
        >
          <option disabled>Choose one</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>React</option>
          <option>Redux</option>
          <option>Node</option>
        </select>
        <span className="error">
          {errors.category && errors.category.message}
        </span>
      </FormGroup>
      <Button type="submit" color="primary" size="lg" block>
        Create Ticket
      </Button>
    </form>
  );
}

export default SignUpForm;

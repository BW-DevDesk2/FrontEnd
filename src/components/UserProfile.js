import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../app";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { useForm } from "react-hook-form";

function UserProfile(props) {
  const [user, setUser] = useState([]);
  const [info, updateInfo] = useState([]);
  const [role, setRoles] = useState([]);
  const { axios } = useContext(AuthContext)();

  // Grab current user that's logged in

  const username = JSON.parse(window.localStorage.getItem("user"));
  const userID = username.usersid;

  // RETRIEVE USER PROFILE DATA

  useEffect(() => {
    const getUser = () => {
      axios
        .get(`api/users/${userID}`)
        .then(({ data }) => {
          console.log(data);
          setUser(data);
        })
        .catch(error => {
          console.log("Error: ", error);
        });
    };
    getUser();
  }, []);

  // RETRIEVE USER ROLES

  const rolesAPI = require("axios");
  rolesAPI.defaults.baseURL = "https://devdesk2eli.herokuapp.com/";
  rolesAPI.defaults.headers.common = {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV2b2luZ3JhbUBhcXVvY28ub25taWNyb3NvZnQuY29tIiwiaWF0IjoxNTgzNDQwNDM5LCJleHAiOjE1ODM1MjY4Mzl9.WogJLbqBo5UEWlQEMQP7stK46dI04tPtnYUuP9crkO0`
  };

  useEffect(() => {
    const getRoles = () => {
      rolesAPI
        .get(`/api/roles/${userID}`)
        .then(role => {
          console.log("Role is: ", role);
          setRoles(role.data);
        })
        .catch(error => {
          console.log("Error retrieving roles: ", error);
        });
    };
    getRoles();
  }, []);

  // FORM TO MAKE CHANGES TO PROFILE IN DATABASE

  const { register, handleSubmit, watch, errors } = useForm();
  const [status, updateStatus] = useState();

  const onSubmit = data => {
    updateUser(data);
    updateInfo(data);
    console.log(data);
    console.log(errors);
    updateStatus("Successfully updated!");

    console.log(watch("name")); // watch input value by passing the name of it
    console.log(watch("email"));
  };

  // MAKE PUT REQUEST TO CHANGE PROFILE INFO

  const updateUser = data => {
    axios
      .put(`/api/users/${userID}`, data)
      .then(response => {
        console.log("Response back from trying to update profile: ", response);
      })
      .catch(error => {
        console.log("Error in successfully changing profile: ", error);
      });
  };

  //

  return (
    <Card>
      <CardBody>
        <CardTitle>My Profile </CardTitle>
        <CardText></CardText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardTitle>
            <b>Name: </b>
            <input
              name="name"
              defaultValue={user.name}
              ref={register({ minLength: { value: 5, message: "too short" } })}
            />
            {errors.name && "Your name is too short!"}
          </CardTitle>
          <CardTitle>
            <b>Email: </b>
            <input
              name="email"
              defaultValue={user.email}
              ref={register({
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                },
                minLength: { value: 5, message: "Too SHORT!!" },
                required: true
              })}
            />
            {errors.email && "Must be a valid email address!"}
          </CardTitle>
          <CardTitle>
            <b>ID:</b>
            {userID}
          </CardTitle>
          <CardTitle>
            <b>Role:</b> {role}
          </CardTitle>
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="Update Profile" />
          {status}
        </form>
      </CardBody>
    </Card>
  );
}

export default UserProfile;

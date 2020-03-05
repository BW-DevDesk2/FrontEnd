import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../app";

function UserProfile(props) {
  const [user, setUser] = useState([]);
  const [roles, setRoles] = useState([]);
  const { axios } = useContext(AuthContext)();

  // Grab current user that's logged in

  const username = JSON.parse(window.localStorage.getItem("user"));
  const userID = username.usersid;

  // Pull User profile data from API

  useEffect(() => {
    const getUser = () => {
      axios
        .get(`/api/users/${userID}`)
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

  useEffect(() => {
    const getRoles = () => {
      axios
        .get(`/api/roles/${userID}`)
        .then(data => {
          console.log(data);
          //setRoles(data);
        })
        .catch(error => {
          console.log("Error retrieving roles: ", error);
        });
    };
    getRoles();
  }, []);

  return (
    <div>
      <h1>My Profile</h1>
      <b>Name: </b>
      {user.name}
      <br></br>
      <b>Role: </b>
      {roles}
      <br></br>
      <b>Email: </b> {user.email}
    </div>
  );
}

export default UserProfile;

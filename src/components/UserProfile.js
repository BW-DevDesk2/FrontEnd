import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../app";

function UserProfile(props) {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  console.log("This is the paramater being passed in: ", id);
  const { axios } = useContext(AuthContext)();

  // Grab current user that's logged in

  const username = JSON.parse(window.localStorage.getItem("user"));
  const userID = username.usersid;

  //

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

  return (
    <div>
      <h1>My Profile</h1>
      <h3>Name: {user.name}</h3>
      <h3>User ID: {user.usersid}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default UserProfile;

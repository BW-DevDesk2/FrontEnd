import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserProfile(props) {
  const [user, setUser] = useState("");
  const params = useParams();

  useEffect(() => {
    const getUser = () => {
      axios
        .get("https://devdesk2eli.herokuapp.com/api/users/:params")
        .then(response => {
          console.log(response);
          setUser(response);
        })
        .catch(error => {
          console.log("Error: ", error);
        });
    };
    getUser();
  }, user);

  return (
    <div>
      <div></div>
      <h1>My Profile</h1>
      <h2>{props.name}</h2>
      <h3>Email: </h3>
      <p>Date Joined: </p>
      <p>Settings: </p>
    </div>
  );
}

export default UserProfile;

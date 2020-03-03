import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../app";

function UserProfile(props) {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  console.log(id);
  const { axios } = useContext(AuthContext)();

  useEffect(() => {
    const getUser = () => {
      axios
        .get(`/api/users/${id}`)
        .then(({ data }) => {
          console.log(data);
          setUser(data);
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
      <h2>{user.userid}</h2>
      <h3>Email: {user.email}</h3>
      <h3></h3>
    </div>
  );
}

export default UserProfile;

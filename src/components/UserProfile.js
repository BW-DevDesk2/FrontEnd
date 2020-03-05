import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../app";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Spinner
} from "reactstrap";

function UserProfile(props) {
  const [user, setUser] = useState([]);
  const [roles, setRoles] = useState([]);
  const { axios } = useContext(AuthContext)();

  // Grab current user that's logged in

  const username = JSON.parse(window.localStorage.getItem("user"));
  const userID = username.usersid;

  // RETRIEVE PROFILE DATA

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

  // FORM TO MAKE CHANGES TO PROFILE IN DATABASE

  // function Ticket() {
  //   const { axios, user } = useContext(AuthContext)();
  //   const { id } = useParams();
  //   const history = useHistory();
  //   const [ticket, setTicket] = useState();

  //   useEffect(() => {
  //     axios.get(`/api/tickets/${id}`).then(({ data }) => {
  //       console.log(data);
  //       setTicket(data);
  //     });
  //   }, []);

  //   const toggleClaimed = () => {
  //     const update = { ...ticket };
  //     update.statusesid === 3
  //       ? (update.statusesid = 1)
  //       : (update.statusesid = 3);
  //     axios.put(`/api/tickets/${id}`, update).then(() => setTicket(update));
  //   };

  //   const toggleResolved = () => {
  //     const update = { ...ticket };
  //     update.statusesid === 2
  //       ? (update.statusesid = 3)
  //       : (update.statusesid = 2);
  //     axios.put(`/api/tickets/${id}`, update).then(() => setTicket(update));
  //   };

  //   const deleteTicket = () => {
  //     axios.delete(`/api/tickets/${id}`).then(() => history.push("/dashboard"));
  //   };

  //   if (!ticket) return <Spinner color="primary" />;

  //   const { title, description, statusesid } = ticket;
  // }

  //

  return (
    <Card>
      <CardBody>
        <CardTitle>My Profile </CardTitle>
        <CardTitle>
          <b>Name:</b> {user.name}
        </CardTitle>
        <CardTitle>
          <b>Email:</b> {user.role}
        </CardTitle>
        <CardTitle>
          <b>Role:</b> {user.email}
        </CardTitle>
        <CardText></CardText>
        <Button color="primary">button</Button>
        <Button color="success">button</Button>
        <Button color="danger">Delete</Button>
      </CardBody>
    </Card>
  );
}

export default UserProfile;

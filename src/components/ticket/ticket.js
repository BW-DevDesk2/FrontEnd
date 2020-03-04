import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Spinner
} from "reactstrap";

import { AuthContext } from "../../app";

function Ticket() {
  const { axios, user } = useContext(AuthContext)();
  const { id } = useParams();
  const history = useHistory();
  const [ticket, setTicket] = useState();

  useEffect(() => {
    axios.get(`/api/tickets/${id}`).then(({ data }) => {
      console.log(data);
      setTicket(data);
    });
  }, []);

  const toggleClaimed = () => {
    const update = { ...ticket };
    update.statusesid === 3 ? (update.statusesid = 1) : (update.statusesid = 3);
    axios.put(`/api/tickets/${id}`, update).then(() => setTicket(update));
  };

  const toggleResolved = () => {
    const update = { ...ticket };
    update.statusesid === 2 ? (update.statusesid = 3) : (update.statusesid = 2);
    axios.put(`/api/tickets/${id}`, update).then(() => setTicket(update));
  };

  const deleteTicket = () => {
    axios.delete(`/api/tickets/${id}`).then(() => history.push("/dashboard"));
  };

  if (!ticket) return <Spinner color="primary" />;

  const { title, description, statusesid } = ticket;
  return (
    <Card className="ticket">
      <CardBody>
        <h3 className="card-title">{title}</h3>
        <CardText>{description}</CardText>
        <Button
          color="primary"
          onClick={toggleClaimed}
          disabled={statusesid === 2}
        >
          {statusesid === 3 || statusesid === 2 ? "Claimed" : "Claim"}
        </Button>
        <Button color="success" onClick={toggleResolved}>
          {statusesid === 2 ? "Resolved" : "Resolve"}
        </Button>
        <Button color="danger" onClick={deleteTicket}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default Ticket;

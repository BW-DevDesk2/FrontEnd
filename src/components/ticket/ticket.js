import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

import { AuthContext } from "../../app";

function Ticket() {
  const { axios } = useContext(AuthContext)();
  const { id } = useParams();
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    axios.get(`/api/tickets/${id}`).then(({ data }) => setTicket(data));
  }, []);

  const { title, description } = ticket;
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button color="primary">Claim</Button>
        <Button color="danger">Resolved</Button>
      </CardBody>
    </Card>
  );
}

export default Ticket;

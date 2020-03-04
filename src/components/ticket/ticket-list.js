import React, { useContext, useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../../app";

function TicketList(props) {
  const { axios } = useContext(AuthContext)();
  const history = useHistory();
  const { apiEndpoint } = props;
  const [tickets, setTickets] = useState();

  useEffect(() => {
    axios.get(apiEndpoint).then(({ data }) => {
      console.log(data);
      setTickets(data);
    });
  }, []);

  if (!tickets) return <Spinner color="primary" />;

  return (
    <ListGroup className="ticket-list">
      {tickets.map(t => (
        <ListGroupItem
          key={t.ticketsid}
          onClick={() => history.push(`/ticket/${t.ticketsid}`)}
        >
          <Link to={`/ticket/${t.ticketsid}`}>{t.title}</Link>
          <p>{t.description}</p>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default TicketList;

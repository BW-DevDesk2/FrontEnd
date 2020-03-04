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
      setTickets(data);
    });
    // eslint-disable-next-line
  }, []);

  if (!tickets) return <Spinner color="primary" />;

  return (
    <ListGroup className="ticket-list">
      {tickets.map(t => (
        <ListGroupItem
          key={t.ticketsid}
          onClick={() => history.push(`/ticket/${t.ticketsid}`)}
        >
          <div>
            <Link to={`/ticket/${t.ticketsid}`}>{t.title}</Link>
            <p>{t.description}</p>
          </div>
          <span>{t.category}</span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default TicketList;

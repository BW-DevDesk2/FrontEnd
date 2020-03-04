import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../../app";

function TicketList(props) {
  const { axios } = useContext(AuthContext)();
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
    <ul className="ticket-list">
      {tickets.map(t => (
        <li key={t.ticketsid}>
          <Link to={`/ticket/${t.ticketsid}`}>{t.title}</Link>
          <p>{t.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default TicketList;

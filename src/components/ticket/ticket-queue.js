import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../../app";

function TicketQueue() {
  const { axios } = useContext(AuthContext)();
  const [tickets, setTickets] = useState();

  useEffect(() => {
    axios.get("/api/tickets/queue").then(({ data }) => {
      console.log(data);
      setTickets(data);
    });
  }, []);

  if (!tickets) return <Spinner color="primary" />;

  return (
    <>
      <h2>Ticket Queue</h2>
      <ol className="ticket-list">
        {tickets.map(t => (
          <li key={t.ticketsid}>
            <Link to={`/ticket/${t.ticketsid}`}>{t.title}</Link>
            <p>{t.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default TicketQueue;

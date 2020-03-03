import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../app";

function TicketQueue() {
  const { axios } = useContext(AuthContext)();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("/api/tickets/queue").then(({ data }) => {
      console.log(data);
      setTickets(data);
    });
  }, []);

  return (
    <>
      <h2>Ticket Queue</h2>
      <ol className="ticket-list">
        {tickets.map(t => (
          <li key={t.ticketsid}>{t.title}</li>
        ))}
      </ol>
    </>
  );
}

export default TicketQueue;

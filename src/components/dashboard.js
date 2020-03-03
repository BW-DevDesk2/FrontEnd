import React from "react";

import TicketQueue from "./ticket/ticket-queue";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <h2>My Tickets</h2>
      <ol className="ticket-list">
        <li>Ticket 1</li>
        <li>Ticket 2</li>
        <li>Ticket 3</li>
      </ol>
      <TicketQueue />
    </div>
  );
}

export default Dashboard;

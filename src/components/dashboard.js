import React from "react";

import TicketList from "./ticket/ticket-list";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <h2>Ticket Queue</h2>
      <TicketList apiEndpoint="/api/tickets/queue" />
    </div>
  );
}

export default Dashboard;

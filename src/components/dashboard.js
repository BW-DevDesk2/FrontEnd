import React from "react";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <h2>My Tickets</h2>
      <ol className="ticket-list">
        <li>Ticket 1</li>
        <li>Ticket 2</li>
        <li>Ticket 3</li>
      </ol>
      <h2>Latest Tickets</h2>
      <ol className="ticket-list">
        <li>Ticket 1</li>
        <li>Ticket 2</li>
        <li>Ticket 3</li>
      </ol>
    </div>
  );
}

export default Dashboard;

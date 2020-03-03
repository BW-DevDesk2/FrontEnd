import React, { useContext, useEffect } from "react";

import { AuthContext } from "../../app";

function Ticket() {
  const { axios } = useContext(AuthContext)();

  useEffect(() => {
    axios.get("/api/tickets").then(response => console.log(response));
  }, []);

  return <h2>ticket.js</h2>;
}

export default Ticket;

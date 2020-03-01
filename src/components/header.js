import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="top">
      <nav>
        <h1 className="title">
          <Link to="/">DevDesk</Link>
        </h1>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        {/* <SearchBar /> */}
      </nav>
    </header>
  );
}

export default Header;

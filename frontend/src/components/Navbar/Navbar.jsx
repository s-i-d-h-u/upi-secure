import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">UPISECURE</div>
      <ul className="nav-list">
        <li className="nav-list-elements"><Link to="/">Home</Link></li>
        <li className="nav-list-elements"><Link to="/transaction">Transaction</Link></li>
        <li className="nav-list-elements"><Link to="/history">History</Link></li>
        <li className="nav-list-elements"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

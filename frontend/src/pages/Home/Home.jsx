import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to UPI Fraud Detection System</h1>
      <p>Detect fraudulent transactions in real time.</p>
      <div className="home-buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/transaction"><button>Check Transaction</button></Link>
      </div>
    </div>
  );
};

export default Home;

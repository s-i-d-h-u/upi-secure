import React, { useEffect, useState } from "react";
import axios from "axios";
import "./History.css";

const History = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/history")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className="history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Timestamp</th>
            <th>Fraud Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.amount}</td>
              <td>{txn.sender}</td>
              <td>{txn.receiver}</td>
              <td>{txn.timestamp}</td>
              <td>{txn.is_fraud ? "Fraud" : "Legit"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;

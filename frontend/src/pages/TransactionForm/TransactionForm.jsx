import React, { useState } from "react";
import axios from "axios";
import "./TransactionForm.css"; 

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    sender: "",
    receiver: "",
    timestamp: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/check_fraud", formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="transaction-form">
      <h2>Enter Transaction Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="amount" placeholder="Amount" onChange={handleChange} required />
        <input type="text" name="sender" placeholder="Sender" onChange={handleChange} required />
        <input type="text" name="receiver" placeholder="Receiver" onChange={handleChange} required />
        <input type="datetime-local" name="timestamp" onChange={handleChange} required />
        <button type="submit">Check Fraud</button>
      </form>
      {result && <p>Fraud Status: {result.is_fraud ? "Fraudulent" : "Legitimate"}</p>}
    </div>
  );
};

export default TransactionForm;

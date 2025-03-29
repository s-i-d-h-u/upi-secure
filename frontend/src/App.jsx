import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TransactionForm from "./pages/TransactionForm/TransactionForm";
import History from "./pages/History/History";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar"><Navbar /></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transaction" element={<TransactionForm />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

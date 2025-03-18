import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

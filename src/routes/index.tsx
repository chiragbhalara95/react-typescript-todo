import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
    </Routes>
  );
};

export default AppRoutes;

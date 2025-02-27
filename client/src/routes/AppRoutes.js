// src/routes/AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../components/App";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
);

export default AppRoutes;

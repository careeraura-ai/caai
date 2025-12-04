// src/layouts/AppLayout.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export default function AppLayout() {
  if (!isLoggedIn()) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

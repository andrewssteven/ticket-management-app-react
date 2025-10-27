import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { useToast } from "../contexts/ToastContext";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const toast = useToast();

  // Allow access during local development for convenience
  const devAllow = typeof import.meta !== "undefined" && import.meta.env?.DEV;

  if (!(isAuthenticated() || devAllow)) {
    toast?.show({
      type: "error",
      message: "Please log in to access this page.",
    });
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}

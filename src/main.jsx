import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TicketsProvider } from "./contexts/TicketsContext";
import ToastProvider from "./components/Toast";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <TicketsProvider>
        <App />
      </TicketsProvider>
    </ToastProvider>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-1 w-full mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <ErrorBoundary>
                    <Dashboard />
                  </ErrorBoundary>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tickets"
              element={
                <ProtectedRoute>
                  <ErrorBoundary>
                    <Tickets />
                  </ErrorBoundary>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

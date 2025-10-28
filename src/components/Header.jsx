import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

export default function Header() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
            F
          </div>
          <div>
            <div className="font-semibold">FlowDesk</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Ticket Management
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/tickets"
            className="hidden sm:inline-block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Tickets
          </Link>
          <Link
            to="/dashboard"
            className="hidden sm:inline-block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Dashboard
          </Link>

          {!authenticated ? (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:opacity-95"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="px-4 py-2 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-red-600 text-white hover:opacity-95"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

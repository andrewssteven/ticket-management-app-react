import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} FlowDesk. All rights reserved.
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="text-sm text-indigo-600">
            Home
          </Link>
          <a href="#" className="text-sm text-gray-600 dark:text-gray-400">
            Privacy
          </a>
          <a href="#" className="text-sm text-gray-600 dark:text-gray-400">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}

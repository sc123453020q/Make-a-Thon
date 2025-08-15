// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/exam-prep" className="hover:text-blue-600">Exam Prep</Link>
          <Link to="/skills" className="hover:text-blue-600">Skills</Link>

          {/* More with dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600">More</button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              <Link
                to="/virtual-lab"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Virtual Labs
              </Link>
              <Link
                to="/discuss-forum"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Discuss Forum
              </Link>
            </div>
          </div>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-semibold border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

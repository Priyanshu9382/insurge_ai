import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center p-4 bg-violet-300 w-[100vw] h-[60px] text-white relative">
      {/* Logo */}
      <div className="logo text-violet-800 text-2xl font-extrabold cursor-pointer">
        Insurge AI
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu sm:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu className="h-6 w-6 cursor-pointer" />
      </div>

      {/* Desktop Nav */}
      <div className="nav-items hidden sm:flex items-center space-x-6">
        <ul className="flex space-x-6">
          <li className="hover:text-violet-800 cursor-pointer font-semibold hover:scale-105 transition">
            Home
          </li>
          <li className="hover:text-violet-800 cursor-pointer font-semibold hover:scale-105 transition">
            About
          </li>
          <li className="hover:text-violet-800 cursor-pointer font-semibold hover:scale-105 transition">
            Contact Us
          </li>
          <li className="hover:text-violet-800 cursor-pointer font-semibold hover:scale-105 transition">
            Login
          </li>
        </ul>
        {/* Fancy Gradient Button */}
        <button className="bg-gradient-to-r bg-[#e66ae6] h-10 px-4 rounded-3xl font-bold cursor-pointer hover:scale-105 hover:shadow-lg transition">
          Check Demo
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`sidebar fixed top-0 h-screen w-2/3 sm:hidden bg-violet-800 text-white p-6 transition-all duration-300 ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex justify-end">
          <FiX
            className="h-6 w-6 cursor-pointer hover:text-pink-400 transition"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col mt-10 space-y-6 text-lg">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">About</li>
          <li className="hover:text-pink-400 cursor-pointer">Contact Us</li>
          <li className="hover:text-pink-400 cursor-pointer">Login</li>
          <li>
            <button className="mt-4 w-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 py-2 rounded-3xl font-bold hover:scale-105 hover:shadow-lg transition">
              Check Demo
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

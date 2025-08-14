import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-lg border-b border-violet-100 h-20 relative z-40">
      {/* Logo */}
      <Link to={'/'} className="text-violet-700 text-2xl font-extrabold cursor-pointer">Insurge AI</Link>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu className="h-6 w-6 cursor-pointer text-violet-700" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-8">
          <Link to={'/'} className="text-gray-700 hover:text-violet-700 cursor-pointer font-medium hover:scale-105 transition">
            Home
          </Link>
          <li className="text-gray-700 hover:text-violet-700 cursor-pointer font-medium hover:scale-105 transition">
            Features
          </li>
          <li className="text-gray-700 hover:text-violet-700 cursor-pointer font-medium hover:scale-105 transition">
            About
          </li>
          <li className="text-gray-700 hover:text-violet-700 cursor-pointer font-medium hover:scale-105 transition">
            Contact
          </li>
        </ul>
        <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition duration-300">
          Get Demo
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 h-screen w-80 md:hidden bg-white shadow-2xl text-gray-800 p-6 transition-all duration-300 z-50 ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <FiX className="h-6 w-6 cursor-pointer hover:text-violet-700 transition" onClick={() => setIsOpen(false)} />
        </div>
        <ul className="flex flex-col space-y-6 text-lg">
          <li className="hover:text-violet-700 cursor-pointer">Home</li>
          <li className="hover:text-violet-700 cursor-pointer">Features</li>
          <li className="hover:text-violet-700 cursor-pointer">About</li>
          <li className="hover:text-violet-700 cursor-pointer">Contact</li>
          <li>
            <button className="mt-6 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition">
              Get Demo
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

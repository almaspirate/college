import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Notice", path: "/notice" },
    { name: "Teachers", path: "/teachers" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded ${
      isActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-blue-100"
    } transition`;

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    {/* Logo */}
    <NavLink to="/" className="flex items-center">
    <img
        src="./assets/logo.jpg"
        alt="College Logo"
        className="h-10 w-auto"
    />
    <h3 className="px-4"> Satbariya Degree College</h3>
    </NavLink>

          <p>Under Development</p>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          {/* Mobile Toggle */}
            <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="text-blue-600 hover:text-blue-800 transition"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden transition-all duration-200 ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
          <div className="flex flex-col px-4 pb-4 gap-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to avoid content being hidden under fixed navbar */}
      <div className="h-[82px] md:h-[82px]"></div>
    </>
  );
}

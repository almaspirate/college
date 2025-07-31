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
    { name: "Gallery", path: "/gallery" },

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
        src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/294594631_486214273505654_6426109679594827462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Mg8rIwWjrzgQ7kNvwH5vpqg&_nc_oc=Adnug3yLO6pLJcTTE6cPdCqn2_yiPSUg39uBkX2VoM6cJXEmSXJXrtifsMNL0KIPQM0&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=P6FcVK3-Wsil8P_4umeVFA&oh=00_AfTmThi7Q4clybTyb0jcT2i6u_kfPy8npuVAJe2YEIqMQA&oe=688FE2DE"
        alt="College Logo"
        className="h-10 w-auto" // Adjust height as needed (e.g., h-12)
    />
    <h3 className="px-4"> Satbariya Degree College</h3>
    </NavLink>


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

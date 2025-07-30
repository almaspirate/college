import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <NavLink to="/" className="inline-block mb-4">
            <img
              src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/294594631_486214273505654_6426109679594827462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Mg8rIwWjrzgQ7kNvwH5vpqg&_nc_oc=Adnug3yLO6pLJcTTE6cPdCqn2_yiPSUg39uBkX2VoM6cJXEmSXJXrtifsMNL0KIPQM0&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=P6FcVK3-Wsil8P_4umeVFA&oh=00_AfTmThi7Q4clybTyb0jcT2i6u_kfPy8npuVAJe2YEIqMQA&oe=688FE2DE"
              alt="College Logo"
              className="h-12 w-auto"
            />
          </NavLink>
          <p className="text-sm text-gray-300">
            SATBARIYA Degree College. Promoting excellence in education since 1990.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/notice" className="hover:underline">Notices</NavLink></li>
            <li><NavLink to="/result" className="hover:underline">Results</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">Pabna, Bangladesh</p>
          <p className="text-sm">Phone: +880-1XXXXXXXXX</p>
          <p className="text-sm">Email: info@satbariya.edu.bd</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SATBARIYA Degree College. All rights reserved.
      </div>
    </footer>
  );
}

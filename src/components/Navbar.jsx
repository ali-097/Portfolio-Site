import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  const linkClasses = (path) =>
    location.pathname === path
      ? "text-[#8B5CF6] font-semibold"
      : "hover:text-[#8B5CF6] transition";

  return (
    <nav className="w-full fixed top-0 left-0 w-full h-16 z-50 bg-[#0D0D0D] text-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-[#8B5CF6]">
        Muhammad Ali
      </Link>

      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={linkClasses(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        {isOpen && (
          <div className="absolute right-6 top-16 bg-[#1a1a1a] border border-gray-700 p-4 rounded-md flex flex-col gap-3 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={linkClasses(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

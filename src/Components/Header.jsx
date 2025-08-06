import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { FiMenu, FiX } from "react-icons/fi";
import "/src/index.css";
import { Link, useLocation } from "react-router-dom";
import logo from '/src/assets/letter-k.png';



function Header() {
  const location = useLocation();
const currentPath = location.pathname;
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

 const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];


  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-zinc-900 bg-opacity-90 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        <div className="w-9">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <div className="hidden md:flex gap-10 text-white items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`link-underline ${
                currentPath === link.to ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </div>

        <div className="md:hidden text-white text-2xl">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden flex flex-col items-center bg-zinc-900 text-white transition-all duration-900 linear overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        } gap-4`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`link-underline ${
              activeLink === link.href ? "active" : ""
            }`}
            onClick={() => handleLinkClick(link.href)}
          >
            {link.name}
          </a>
        ))}
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
      </div>
    </nav>
  );
}

export default Header;

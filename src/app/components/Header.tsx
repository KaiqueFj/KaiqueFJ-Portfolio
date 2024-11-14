"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa"; // Import moon and sun icons for theme toggle

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  // On component mount, check localStorage for the preferred theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light"; // Toggle between dark and light
    setIsDarkMode(!isDarkMode);

    // Toggle body class and save to localStorage
    document.body.classList.toggle("dark", newTheme === "dark");
    document.body.classList.toggle("light", newTheme === "light");

    // Save the theme preference to localStorage
    localStorage.setItem("theme", newTheme);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between w-full mt-8 p-3 px-4 md:px-0">
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-primary-text-color focus:outline-none z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Slide-in Navigation */}
      <div
        className={`fixed inset-y-0 left-0 w-2/3 max-w-xs bg-secondary-background text-primary-text-color transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-primary-text-color"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-start mt-16 space-y-4 pl-6">
          <li>
            <Link
              href="/"
              className={`text-lg font-medium hover:text-hover-primary-text-color transition ${
                pathname === "/"
                  ? "text-third-text-color"
                  : "text-primary-text-color"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`text-lg font-medium hover:text-hover-primary-text-color  transition ${
                pathname === "/projects"
                  ? "text-third-text-color"
                  : "text-primary-text-color"
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/hireMe"
              className={`text-lg font-medium hover:text-hover-primary-text-color transition ${
                pathname === "/hireMe"
                  ? "text-third-text-color"
                  : "text-primary-text-color"
              }`}
              onClick={toggleMenu}
            >
              Hire me
            </Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="text-primary-text-color">
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </li>
        </ul>
      </div>

      {/* Centered Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center w-full max-w-screen">
        <ul className="flex items-center space-x-6 bg-secondary-background rounded-full ring-1  ring-white/10 px-4 py-2">
          <li>
            <Link
              href="/"
              className={`px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition ${
                pathname === "/"
                  ? "text-third-text-color"
                  : "text-primary-text-color"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition ${
                pathname === "/projects"
                  ? "text-third-text-color"
                  : "text-primary-text-color"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/hireMe"
              className={`px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition ${
                pathname === "/hireMe"
                  ? "text-third-text-color"
                  : "text-primary-text-color"
              }`}
            >
              Hire me
            </Link>
          </li>
        </ul>
        {/* Theme Toggle Button */}
        <div className="absolute right-4 ">
          <button onClick={toggleTheme} className="text-primary-text-color">
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

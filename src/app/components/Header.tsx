"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter

export default function Header() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <header className="flex items-center justify-center w-full mt-8">
      <nav className="flex items-center justify-center w-full max-w-screen-md bg-secondary-background rounded-full ring-1 ring-white/10 px-4 py-2">
        <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 transition-all duration-300 ease-in-out">
          <li>
            <Link
              href="/about"
              className={`px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition ${
                pathname === "/about"
                  ? "text-hover-primary-text-color"
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
                  ? "text-hover-primary-text-color"
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
                  ? "text-hover-primary-text-color"
                  : "text-primary-text-color"
              }`}
            >
              Hire me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

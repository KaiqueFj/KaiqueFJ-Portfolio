export default function Header() {
  return (
    <header className="flex items-center justify-center w-full mt-8">
      <nav className="flex items-center justify-center w-1/3 max-w-screen-md bg-secondary-background rounded-full ring-1 ring-white/10 px-4 py-2">
        <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 transition-all duration-300 ease-in-out">
          <li>
            <a
              className="px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition"
              href="#"
            >
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

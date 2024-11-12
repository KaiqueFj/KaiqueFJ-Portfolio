export default function Header() {
  return (
    <header className="flex items-center justify-center  mt-8  w-full top-0 left-0 ">
      <nav className="flex items-center rounded-full ring-1 ring-white/10  text-primary-text-color font-medium justify-center w-1/3 px-6 py-3 h-10 bg-secondary-background">
        <ul className=" top-20 right-0 rounded-full w-96 items-center transform translate-x-full opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto  transition-all duration-300 ease-in-out z-50 flex flex-col md:flex-row md:static md:w-fit  justify-between md:space-x-4 md:translate-x-0 p-4 md:p-0 md:rounded-none shadow-md md:shadow-none">
          <li>
            <a
              className=" relative block px-5 py-2 hover:text-hover-primary-text-color transition"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className=" relative block px-5 py-2 hover:text-hover-primary-text-color transition"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className=" relative block px-5 py-2 hover:text-hover-primary-text-color transition"
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

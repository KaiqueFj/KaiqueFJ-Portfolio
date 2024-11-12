export default function Footer() {
  return (
    <footer className="  mt-8  w-full top-0 left-0  border-t border-border-color ">
      <div className="px-10 py-6 w-full">
        <div className="flex flex-row justify-between items-center ">
          <div className="flex gap-4 text-primary-text-color text-sm pt-10 pb-10">
            <a
              className=" transition hover:text-hover-primary-text-color"
              href=""
            >
              About
            </a>
            <a
              className=" transition hover:text-hover-primary-text-color"
              href=""
            >
              Projects
            </a>
            <a
              className=" transition hover:text-hover-primary-text-color"
              href=""
            >
              Hire me
            </a>
          </div>
          <p className="text-primary-text-color text-sm">
            © 2024 Kaique Ferraz de Jesus. All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-border-color">
      <div className="px-6 py-6 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          {/* Links Section */}
          <div className="flex gap-6 text-primary-text-color text-sm">
            <a
              className="transition hover:text-hover-primary-text-color"
              href="#"
            >
              About
            </a>
            <a
              className="transition hover:text-hover-primary-text-color"
              href="#"
            >
              Projects
            </a>
            <a
              className="transition hover:text-hover-primary-text-color"
              href="#"
            >
              Hire Me
            </a>
          </div>
          {/* Copyright Section */}
          <p className="text-primary-text-color text-sm mt-4 md:mt-0">
            © 2024 Kaique Ferraz de Jesus. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

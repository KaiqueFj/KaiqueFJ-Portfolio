import Image from "next/image";

export default function Introduction() {
  return (
    <div className="mainContent flex flex-col md:flex-row p-8 max-w-screen-xl mx-auto space-y-10 md:space-y-0">
      <div className="introduction w-full md:w-1/2 space-y-4 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-text-color leading-tight">
          {
            "  Hi, I'm Kaique – passionate about creating innovative solutions and always exploring new ideas to shape the future"
          }
        </h1>
        <div className="text-base md:text-lg space-y-6 text-secondary-text-color">
          <p>
            My journey into technology began as a kid, fascinated by how the
            world works. I started solving math problems using Python, and that
            curiosity grew into a passion for coding and building solutions that
            simplify everyday tasks.
          </p>
          <p>
            Sports have always been a big part of my life, whether it’s shooting
            3-pointers or lifting weights at the gym. It’s where I relax,
            challenge myself, and build the mindset that fuels both my personal
            and professional growth.
          </p>
          <p>
            Today, I work as a Senior SRE Analyst at Ipiranga in Brazil, where I
            tackle new challenges every day, applying my love for technology to
            ensure system reliability and make a real impact.
          </p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end w-full md:w-1/2 additionalInfo px-4 md:px-0">
        <div className="gap-6 flex flex-col  items-center">
          <Image
            className="rounded-md shadow-lg"
            src="/Images/profile-pic.jpg"
            alt="Kaique's profile picture"
            width={300}
            height={300}
          />
          <div className="listContact w-full">
            <ul className="space-y-2">
              <li>
                <a
                  className="flex items-center text-primary-text-color font-medium text-md hover:text-hover-primary-text-color transition"
                  href="https://github.com/KaiqueFj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  <span className="ml-4">Find me on GitHub</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-primary-text-color font-medium text-md hover:text-hover-primary-text-color transition"
                  href="https://www.linkedin.com/in/kaique-ferraz-f/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span className="ml-4">Connect on LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-primary-text-color font-medium text-md hover:text-hover-primary-text-color transition"
                  href="mailto:kaiqueferraz.dev@gmail.com"
                >
                  <i className="fa-regular fa-envelope"></i>
                  <span className="ml-4">kaiqueferraz.dev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="mainContent flex flex-col md:flex-row p-8 max-w-screen-xl mx-auto space-y-10 md:space-y-0">
      {/* Introduction Section */}
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

      {/* Introduction Section */}

      <div className="flex justify-center md:justify-end w-full  flex-col items-center md:w-1/2 additionalInfo px-4 md:px-0 gap-6">
        {/* image Section */}
        <div className="Picture border-2 w-2/3 justify-center  flex  rounded-lg border-border-color shadow-sm shadow-border-color  p-3">
          {/* image Section */}
          <Image
            className="rounded-md shadow-lg"
            src="/Images/profile-pic.jpg"
            alt="Kaique's profile picture"
            width={300}
            height={300}
          />
        </div>

        {/* Work Section */}
        <div className="WorkSection border-2 w-full sm:w-2/3 flex flex-col rounded-lg border-border-color shadow-sm shadow-border-color gap-4 p-3">
          {/* title */}
          <div className="flex items-center gap-4 flex-row">
            <i className="fa-solid fa-briefcase ml-2 text-lg text-primary-text-color"></i>
            <h2 className="text-md font-semibold text-primary-text-color">
              Works
            </h2>
          </div>

          {/* Experiences */}
          <div className="flex flex-col gap-4">
            {/* Experience 1 */}
            <div className="flex gap-2 flex-row items-center">
              <div className="flex flex-row gap-2">
                <Image
                  className="rounded-full shadow-lg"
                  src="/Images/work/ipiranga-logo.jpeg"
                  alt="Ipiranga logo"
                  width={40}
                  height={30}
                />
              </div>
              <div className="content w-full flex flex-col gap-2">
                <span className="text-base font-medium text-primary-text-color">
                  Ipiranga
                </span>
                <div className="flex flex-row sm:flex-row gap-4 justify-between">
                  <span className="text-sm text-secondary-text-color">
                    Senior SRE
                  </span>
                  <span className="text-sm text-secondary-text-color">
                    2023 - Present
                  </span>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="flex gap-2 flex-row items-center">
              <div className="flex flex-row gap-2">
                <Image
                  className="rounded-full shadow-lg"
                  src="/Images/work/webmotors-logo.png"
                  alt="Webmotors logo"
                  width={40}
                  height={30}
                />
              </div>
              <div className="content w-full flex flex-col gap-2">
                <span className="text-base font-medium text-primary-text-color">
                  Webmotors
                </span>
                <div className="flex flex-row sm:flex-row gap-4 justify-between">
                  <span className="text-sm text-secondary-text-color">
                    Junior SRE
                  </span>
                  <span className="text-sm text-secondary-text-color">
                    2021 - 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links sections */}
        <div className="listContact border-2 w-full sm:w-2/3 flex flex-col rounded-lg border-border-color shadow-sm shadow-border-color gap-4 p-3">
          {/* title */}
          <div className="flex items-center gap-4 flex-row">
            <i className="fa-regular fa-id-card ml-2 text-lg text-primary-text-color"></i>
            <h2 className="text-md font-semibold text-primary-text-color">
              Contact
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col ml-3">
            <ul className="space-y-2">
              <li className="flex items-center text-primary-text-color font-medium text-md hover:text-hover-primary-text-color transition">
                <i className="fa-brands fa-github"></i>
                <Link
                  href="https://github.com/KaiqueFj"
                  className="ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find me on GitHub
                </Link>
              </li>
              <li className="flex items-center text-primary-text-color font-medium text-md hover:text-hover-primary-text-color transition">
                <i className="fa-brands fa-linkedin"></i>
                <Link
                  href="https://www.linkedin.com/in/kaique-ferraz-f/"
                  className="ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </Link>
              </li>
              <li className="flex items-center text-primary-text-color font-medium text-md hover:text-hover-primary-text-color transition">
                <i className="fa-regular fa-envelope"></i>
                <Link
                  href="mailto:kaiqueferraz.dev@gmail.com"
                  className="ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kaiqueferraz.dev@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Get resume section */}
        <div className="listContact border-2 w-full sm:w-2/3 bg-purple-700  hover:bg-hover-primary-text-color transition flex flex-col rounded-lg border-border-color shadow-sm shadow-border-color items-center p-3">
          {/* Content */}
          <div className="flex flex-col  ">
            <a
              href="/Cv/Kaique-Ferraz-de-Jesus-CV-US.pdf"
              download="Kaique_Ferraz_Resume.pdf"
            >
              <button className="btn-download text-base font-medium text-fourth-text-color">
                Get my resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

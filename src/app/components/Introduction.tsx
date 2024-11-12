import Image from "next/image";

export default function Introduction() {
  return (
    <div className="mainContent flex  p-10 max-w-full">
      <div className=" flex flex-row w-full gap-4 ">
        <div className="introduction w-2/4">
          <h1 className="text-4xl font-bold text-primary-text-color">
            {
              "Hi, I'm Kaique – passionate about creating innovative solutions and always exploring new ideas to shape the future "
            }
          </h1>
          <div className=" mt-3 text-base space-y-6 text-primary-text-color">
            <div>
              <p>
                {
                  "My journey into technology began as a kid, fascinated by how the world works. I started solving math problems using Python, and that curiosity grew into a passion for coding and building solutions that simplify everyday tasks"
                }
              </p>
            </div>

            <div>
              <p>
                {
                  "Sports have always been a big part of my life, whether it’s shooting 3-pointers or lifting weights at the gym. It’s where I relax, challenge myself, and build the mindset that fuels both my personal and professional growth."
                }
              </p>
            </div>

            <div>
              <p>
                {
                  "Today, I work as a Senior SRE Analyst at Ipiranga in Brazil, where I tackle new challenges every day, applying my love for technology to ensure system reliability and make a real impact."
                }
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-2/4 additionalInfo ">
          <div className="gap-4 flex flex-col">
            <Image
              className="rounded-md"
              src="/images/profile-pic.jpg"
              alt="A description of the image"
              width={320}
              height={320}
            />
            <div className="listContact">
              <ul>
                <li className="  p-2">
                  <a
                    className="  items-center hover:text-hover-primary-text-color flex transition text-primary-text-color font-medium text-md"
                    href=""
                  >
                    <i className=" fa-brands fa-github"></i>
                    <span className="ml-5">Reach me out on Github</span>
                  </a>
                </li>
                <li className="p-2">
                  <a
                    className=" items-center  hover:text-hover-primary-text-color flex transition text-primary-text-color font-medium text-md"
                    href=""
                  >
                    <i className=" fa-brands fa-linkedin"></i>
                    <span className="ml-5">Reach me out on Github</span>
                  </a>
                </li>

                <li className="p-2">
                  <a
                    className=" items-center  hover:text-hover-primary-text-color flex transition text-primary-text-color font-medium text-md"
                    href="mailto:kaiqueferraz.dev@gmail.com"
                  >
                    <i className="fa-regular fa-envelope"></i>
                    <span className="ml-5">kaiqueferraz.dev@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

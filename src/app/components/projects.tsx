import Image from "next/image";

export default function Project() {
  return (
    <div className="mainContent flex flex-col min-h-screen p-8 max-w-screen-xl gap-10 mx-auto space-y-10">
      {/* Introduction Section */}
      <div className="introduction w-full space-y-6 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-text-color leading-tight">
          Crafting Solutions, Shaping the Future
        </h1>
        <div className="text-base md:text-lg space-y-6 text-primary-text-color">
          <p>
            Each project here represents a step in my journey from curiosity to
            impact. Driven by a love for coding and problem-solving, I’m
            constantly exploring new ideas that push the boundaries of
            technology. Whether it’s enhancing system reliability or building
            tools to simplify life, every challenge fuels my passion to innovate
            and make a difference.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects w-full flex flex-row gap-6">
        {/* Project Card 1 */}
        <div className="flex flex-col md:flex-row gap-6 w-full rounded-lg shadow-xl bg-background p-6 space-y-4 transform duration-300 hover:scale-105">
          <div className="bg-primary-background p-4 rounded-lg shadow-md">
            <Image
              className="rounded-md shadow-lg"
              src="/images/crypto-logo-coin.png"
              alt="Crypto project image"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-primary-text-color">
              Crypto Tracker
            </h3>
            <span className="text-secondary-text-color text-sm mb-4">
              Simplified way to check the crypto market
            </span>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-link text-primary-text-color"></i>
              <a
                className="text-primary-text-color hover:text-hover-primary-text-color transition"
                href="https://crypto-currency-pgqa.onrender.com/overview"
              >
                Crypto-Tracker.com
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="flex flex-col md:flex-row gap-6 w-full rounded-lg shadow-xl bg-background p-6 space-y-4 transform duration-300 hover:scale-105">
          <div className="bg-primary-background p-4 rounded-lg shadow-md">
            <Image
              className="rounded-md shadow-lg"
              src="/images/crypto-logo-coin.png"
              alt="Crypto project image"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-primary-text-color">
              Crypto Tracker
            </h3>
            <span className="text-secondary-text-color text-sm mb-4">
              Simplified way to check the crypto market
            </span>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-link text-primary-text-color"></i>
              <a
                className="text-primary-text-color hover:text-hover-primary-text-color transition"
                href="https://crypto-currency-pgqa.onrender.com/overview"
              >
                Crypto-Tracker.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

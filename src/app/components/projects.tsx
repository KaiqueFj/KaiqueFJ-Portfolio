import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageSrc: "/Images/icons/crypto-logo-coin.png",
    title: "Crypto Tracker",
    description:
      "Simplified way to check the crypto market, prices, fear markets and more.",
    technologies: [
      { iconClass: "/Images/icons/nodeJS-logo.png", name: "NodeJS" },
      { iconClass: "/Images/icons/mongoDB-icon.png", name: "MongoDB" },
      { iconClass: "/Images/icons/pug-final-logo.png", name: "Pug template" },
      { iconClass: "/Images/icons/coinGecko-logo.png", name: "CoinGecko" },
    ],
    link: "https://crypto-currency-pgqa.onrender.com/overview",
    linkText: "Crypto-tracker.com",
  },
  {
    imageSrc: "/Images/icons/chat-icon.png",
    title: "Super Chat",
    description: "Modern chat app easy to use, friendly and secure",
    technologies: [
      { iconClass: "/Images/icons/nodeJS-logo.png", name: "NodeJS" },

      { iconClass: "/Images/icons/mongoDB-icon.png", name: "MongoDB" },
      { iconClass: "/Images/icons/pug-final-logo.png", name: "Pug template" },
      { iconClass: "/Images/icons/socket-icon.png", name: "Socket.io" },
    ],
    link: "https://super-chat-uhey.onrender.com",
    linkText: "Super-chat.com",
  },
  {
    imageSrc: "/Images/icons/icon.png",
    title: "Sneakers Store",
    description:
      "Nike-inspired sneaker shop with dynamic UI and full shopping workflow.",
    technologies: [
      { iconClass: "/Images/icons/nextjs-icon.png", name: "NextJS" },
      { iconClass: "/Images/icons/nextAuth-icon.png", name: "NextAuth" },
      { iconClass: "/Images/icons/supabase-icon.png", name: "Supabase" },
      { iconClass: "/Images/icons/tailwind-icon.png", name: "Tailwind" },
    ],
    link: "https://sharkf-store.netlify.app",
    linkText: "Sneakers-store.app",
  },
];

export default function Project() {
  return (
    <div className="mainContent flex flex-col min-h-screen p-8 max-w-screen-xl gap-10 mx-auto space-y-10">
      {/* Introduction Section */}
      <div className="introduction w-full space-y-6 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-text-color leading-tight">
          Software engineer Crafting Solutions, Shaping the Future
        </h1>
        <div className="text-base md:text-lg space-y-6 text-secondary-text-color">
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
      <div className="projects w-full flex flex-col items-center md:flex-row gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </div>
    </div>
  );
}

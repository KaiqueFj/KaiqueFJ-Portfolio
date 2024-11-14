import React from "react";

export default function HireMe() {
  return (
    <div className="hire-me min-h-screen bg-g text-primary-text-color p-8 max-w-screen-lg mx-auto">
      {/* Introduction */}
      <section className="introduction text-center mb-10 space-y-4">
        <h1 className="text-4xl font-bold">
          {"   Let's Build Something Great Together"}
        </h1>
        <p className="text-lg text-secondary-text-color">
          I’m a passionate developer dedicated to crafting high-quality,
          impactful projects. Whether you need a dynamic website, a real-time
          chat application, or a streamlined dashboard, I have the expertise to
          bring your vision to life.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills mb-10">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-primary-text-color text-lg">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Socket.io</li>
          <li>AWS</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact mb-10">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <form
          className="bg-secondary-background p-6 rounded-lg shadow-md space-y-4"
          action="https://formspree.io/f/mwpkbaer"
          method="POST"
        >
          <div>
            <label htmlFor="name" className="block text-primary-text-color">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 bg-primary-background border-2 border-border-color rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-primary-text-color">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 bg-primary-background border-2 border-border-color rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-primary-text-color">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full p-2 bg-primary-background border-2 border-border-color rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-primary-background text-primary-text-color font-semibold rounded hover:bg-hover-primary-text-color transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

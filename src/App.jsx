import React, { useState } from "react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import heroimg from "./assets/hero.webp";
import hero2 from "./assets/hero2.webp";
import Testimonial from "./assets/Testinomial";
import FAQ from "./FAQ";

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between px-6 md:px-20 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-blue-500 rounded-lg p-2 text-white">N</span>
          <span className="font-bold text-xl">Nextly</span>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          <li className="cursor-pointer hover:text-blue-500">Product</li>
          <li className="cursor-pointer hover:text-blue-500">Features</li>
          <li className="cursor-pointer hover:text-blue-500">Pricing</li>
          <li className="cursor-pointer hover:text-blue-500">Company</li>
          <li className="cursor-pointer hover:text-blue-500">Blog</li>
          <li className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
            Get Started
          </li>
          <li
            className="cursor-pointer text-2xl"
            onClick={changeTheme}
            title="Toggle Theme"
          >
            {theme === "light" ? <MdDarkMode /> : <MdOutlineWbSunny />}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row mx-6 md:mx-20 items-center justify-center gap-8 py-10">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Free Landing Page <br /> Template for Startups
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Nextly is a free landing page & marketing website template for startups and indie
            projects. It’s built with Next.js & TailwindCSS — and it’s completely open-source.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition">
              Download for Free
            </button>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
              <FaGithub />
              <p>View on GitHub</p>
            </div>
          </div>
        </div>

        <img
          src={heroimg}
          alt="hero-img"
          className="h-auto w-full md:w-1/2 object-contain drop-shadow-lg"
        />
      </section>

      {/* Trusted Logos */}
      <section className="text-center mt-12 px-4">
        <p className="text-lg">
          Trusted by <span className="text-violet-900 uppercase font-bold">2000+</span> customers
          worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center h-auto gap-6 mt-6">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="https://m.media-amazon.com/images/G/03/gc/designs/livepreview/blue_hero_logo_noto_email_v2016_de-main._CB467020238_.png"
              alt={`logo-${i}`}
              className="h-12 md:h-20 object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="text-center text-xl flex flex-col items-center justify-center mt-16 space-y-3 px-4">
        <p className="text-violet-900 font-bold uppercase">Nextly Benefits</p>
        <h2 className="font-bold text-3xl md:text-4xl">Why should you use this landing page?</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-base md:text-lg">
          Nextly is a free landing page & marketing website template for startups and indie projects.
          It’s built with Next.js & TailwindCSS and completely open-source.
        </p>
      </section>

      {/* Highlight Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 mx-6 md:mx-20 mt-12">
        <div className="md:w-1/2">
          <img
            src={hero2}
            alt="hero2-pic"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4 text-center md:text-left">
          <p className="font-bold text-3xl">Highlight your benefits</p>
          <p className="text-gray-600 dark:text-gray-300">
            You can use this space to highlight your first benefit or feature of your product. It can
            also contain an image or illustration along with some bullet points.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔹</span>
              <div>
                <p className="font-semibold">Understand your customers</p>
                <p>Explain the first point briefly in one or two lines.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">➡️</span>
              <div>
                <p className="font-semibold">Improve acquisition</p>
                <p>Here you can add the next benefit point.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-semibold">Drive customer retention</p>
                <p>This will be your last bullet point in this section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col justify-center items-center gap-10 mt-16 px-4">
        <Testimonial />
        <Testimonial />
      </section>

      {/* FAQ */}
      <section className="mt-16 px-4">
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Nextly. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

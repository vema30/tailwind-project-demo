import React, { useState } from "react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import heroimg from './assets/hero.webp';
import hero2 from './assets/hero2.webp';
import Testimonial from './assets/Testinomial'
import FAQ from "./FAQ";
const App = () => {
  const [theme, setTheme] = useState("light"); // 'light' or 'dark'

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md mx-20 ">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-blue-500 rounded-lg p-1">N</span>
          <span className="font-bold text-xl">Nextly</span>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Company</li>
          <li>Blog</li>
          <li className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">Get Started</li>
          <li className="cursor-pointer text-2xl" onClick={changeTheme}>
            {theme === "light" ? <MdDarkMode /> : <MdOutlineWbSunny />}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row mx-20 items-center justify-center text-2xl gap-8">
        <div className="md:w-1/2 space-y-4">
          <div className="font-bold text-4xl">
            Free Landing Page <br /> Template for startups
          </div>
          <div>
            Nextly is a free landing page & marketing website template for startups and indie projects.
            It's built with Next.js & TailwindCSS, and it's completely open-source.
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-blue-500 p-3 rounded-xl">Download for free</button>
            <div className="flex space-x-1 items-center">
              <FaGithub />
              <p>View on Github</p>
            </div>
          </div>
        </div>

        <img src={heroimg} alt="hero-img" className="h-96 md:w-1/2 w-full object-contain" />
      </div>

      {/* Trusted Logos */}
      <div className="text-center mt-12">
        <p>
          Trusted by <span className="text-violet-900 uppercase font-bold">2000+</span> customers worldwide
        </p>
        <div className="flex justify-center items-center h-28 gap-4 mt-4 flex-wrap">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="https://m.media-amazon.com/images/G/03/gc/designs/livepreview/blue_hero_logo_noto_email_v2016_de-main._CB467020238_.png"
              alt={`logo-${i}`}
              className="h-full object-contain"
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="text-center text-xl flex flex-col items-center justify-center mt-12 space-y-2">
        <p className="text-violet-900 font-bold uppercase py-3">Nextly Benefits</p>
        <p className="py-2 font-bold text-3xl">Why should you use this landing page</p>
        <p className="pb-2 max-w-2xl">
          Nextly is a free landing page & marketing website template for startups and indie projects.
          It's built with Next.js & TailwindCSS and completely open-source.
        </p>
      </div>

      {/* Highlight Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mx-20 mt-12">
        <div className="md:w-1/2">
          <img src={hero2} alt="hero2-pic" className="w-full object-contain" />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4">
          <p className="font-bold text-3xl">Highlight your benefits</p>
          <p>
            You can use this space to highlight your first benefit or a feature of your product. 
            It can also contain an image or illustration along with bullet points.
          </p>

          {/* Example Bullet Points */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div>🔹</div>
              <div>
                <p className="font-semibold">Understand your customers</p>
                <p>Explain the first point briefly in one or two lines.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>➡️</div>
              <div>
                <p className="font-semibold">Improve acquisition</p>
                <p>Here you can add the next benefit point.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>⭐</div>
              <div>
                <p className="font-semibold">Drive customer retention</p>
                <p>This will be your last bullet point in this section.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="flex flex-col justify-center items-center">
    <Testimonial/>
    <Testimonial/>
    </div>
    <div className="mt-14">
    <FAQ/>
    </div>
    </div>
  );
};

export default App;

import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-violet-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 px-6 rounded-2xl shadow-md mx-4 sm:mx-10 md:mx-32 lg:mx-40 mt-20 transition-colors duration-300">
      
      {/* Section Header */}
      <p className="text-violet-900 dark:text-violet-400 font-bold uppercase tracking-wide mb-2 text-sm md:text-base">
        What our customers say
      </p>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
        Real stories from teams who achieved results with Nextly
      </h2>
      
      {/* Testimonial Quote */}
      <blockquote className="max-w-3xl text-gray-700 dark:text-gray-300 italic mb-10 leading-relaxed text-base md:text-lg">
        “Nextly completely transformed how our sales team operates. The landing pages helped us
        improve conversions by <span className="font-semibold text-violet-700 dark:text-violet-300">35%</span> in just two weeks.
        The flexibility, speed, and design quality are unmatched.”
      </blockquote>
      
      {/* Author Info */}
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Sarah Steiner"
          className="w-20 h-20 rounded-full object-cover border-4 border-violet-200 dark:border-violet-700 shadow-lg"
        />
        <p className="font-semibold text-lg mt-4">Sarah Steiner</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">VP of Sales at Google & Data</p>
      </div>
    </section>
  );
};

export default Testimonial;

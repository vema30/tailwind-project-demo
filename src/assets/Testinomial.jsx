import React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-violet-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 px-6 rounded-2xl shadow-md mx-10 md:mx-40 mt-20">
      
      <p className="text-violet-900 font-bold uppercase tracking-wide mb-2">
        What our customers say
      </p>
      
      <h2 className="text-3xl font-bold mb-6">
        Share a real testimonial that highlights your benefits
      </h2>
      
      <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
        “Nextly completely transformed how our sales team operates. The landing pages helped us
        improve conversions by 35% in just two weeks. The flexibility and design quality are unmatched.”
      </p>
      
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Sarah Steiner"
          className="w-20 h-20 rounded-full object-cover border-4 border-violet-200"
        />
        <p className="font-semibold text-lg mt-3">Sarah Steiner</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">VP of Sales at Google and Data</p>
      </div>
    </div>
  );
};

export default Testimonial;

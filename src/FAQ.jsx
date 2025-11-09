import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this template completely free to use?",
      answer:
        "Yes, this template is completely free to use. You can customize it however you like.",
    },
    {
      question: "Can I use it in a commercial project?",
      answer:
        "Absolutely! You can use this template in commercial or personal projects without restrictions.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Since this is a free and open-source template, refunds do not apply. However, you can always fork and modify it.",
    },
    {
      question: "Do you offer technical support?",
      answer:
        "We don’t offer dedicated technical support, but you can open an issue on GitHub or join our community discussions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-violet-900 dark:text-violet-400 font-bold uppercase mb-2 tracking-wide">
          Frequently Asked Questions
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Answer your customers’ possible questions here
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base">
          Addressing common questions helps increase trust, improve conversion
          rates, and reduce support requests.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-800 transition-all duration-300"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-violet-400"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`text-violet-600 dark:text-violet-400 text-2xl transform transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-4 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

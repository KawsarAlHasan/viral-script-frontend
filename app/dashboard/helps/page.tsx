"use client";
import { useState } from "react";
import {
  FiChevronDown,
  FiMail,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";

const Helps = () => {
  const faqs = [
    {
      question: "How do I create a new script?",
      answer:
        "Click on the 'New Script' button in your dashboard and fill out the required information about your product.",
    },
    {
      question: "Can I edit my generated scripts?",
      answer:
        "Yes, you can edit any script after generation. Just click the 'Edit' button on your script card.",
    },
    {
      question: "What file formats can I download?",
      answer:
        "Currently we support PDF downloads, with more formats coming soon.",
    },
    {
      question: "How do I change my account settings?",
      answer:
        "Navigate to the Settings page from your dashboard to update your preferences.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="my-4 text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#111827] via-[#ff3898] dark:from-[#ededed] to-purple-600 bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="textGray600">
            Find answers to common questions or contact our support team
          </p>
        </div>

        {/* FAQ Section */}
        <div className="card rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FiHelpCircle className="text-blue-500" size={24} />
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 pb-3"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <FiChevronDown
                    className={`transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="pb-3 textGray600 ">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="card rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <FiMessageSquare className="text-green-500" size={24} />
            <h2 className="text-xl font-semibold">Still need help?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <FiMail className="text-blue-500" size={20} />
                <h3 className="font-medium">Email Support</h3>
              </div>
              <p className="textGray600 mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Contact via Email
              </button>
            </div>

            <div className="card rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <FiMessageSquare className="text-green-500" size={20} />
                <h3 className="font-medium">Live Chat</h3>
              </div>
              <p className="textGray600 mb-4">
                Chat with our support team in real-time
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helps;

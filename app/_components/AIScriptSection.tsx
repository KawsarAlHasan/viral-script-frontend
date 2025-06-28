"use client";

import React, { useState } from "react";

import {
  FaMagic,
  FaRobot,
  FaLightbulb,
  FaArrowRight,
  FaLongArrowAltRight,
} from "react-icons/fa";

const AIScriptSection = () => {
  const [isUser, setISUser] = useState(false);

  const handleClick = () => {
    if (isUser) {
      console.log("proccess upcomming");
    } else {
      const modal = document.getElementById(
        "login_modal_button",
      ) as HTMLDialogElement | null;
      if (modal) {
        modal.showModal();
      }
    }
  };
  return (
    <section className="py-16 section-container">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            AI Script Generator
          </h2>
          <p className="text-lg textGray600 max-w-2xl mx-auto">
            Our advanced AI will create custom UGC scripts tailored to your
            specific product, niche, and target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-purple-600 text-3xl mb-4">
              <FaMagic />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Scripts</h3>
            <p className="textGray600">
              Generate high-quality UGC scripts tailored to your product in less
              than a minute.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-pink-600 text-3xl mb-4">
              <FaRobot />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Customization</h3>
            <p className="textGray600">
              Customize tone, style and key messages to match your brand voice
              perfectly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-indigo-600 text-3xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-3">Creative Ideas</h3>
            <p className="textGray600">
              Get fresh content ideas that resonate with your target audience.
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* Notify Button */}
          <div className="pt-2">
            <button
              onClick={handleClick}
              className=" group font-semibold py-4 px-2 md:px-6 rounded-full cursor-pointer btn-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="flex gap-1 items-center justify-center">
                Try the AI Script Generator
                <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                  <FaLongArrowAltRight />
                </span>
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-sm textGray600" style={{ opacity: 0.75 }}>
              AI Script Generator is here – Start creating your scripts today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIScriptSection;

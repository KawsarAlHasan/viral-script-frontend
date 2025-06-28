"use client";

import React, { useState } from "react";
import { ChevronDown, Play, Star, Bookmark } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ScriptSection = () => {
  const [selectedNiche, setSelectedNiche] = useState("All Niches");
  const [isUser, setISUser] = useState(false);

  const scripts = [
    {
      id: 1,
      category: "Beauty & Skincare",
      categoryColor: "bg-gradient-to-r from-pink-400 to-rose-500",
      title: "The 10-Second Skincare Hack",
      description:
        '"I used to have terrible acne until I discovered this one weird trick that cleared my skin in just 48 hours..."',
      buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    {
      id: 2,
      category: "Home & Cleaning",
      categoryColor: "bg-gradient-to-r from-emerald-400 to-green-500",
      title: "The Kitchen Cleaning Revolution",
      description:
        '"This $3 household item made my kitchen spotless in 5 minutes. Professional cleaners hate this secret..."',
      buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    {
      id: 3,
      category: "Wellness & Supplements",
      categoryColor: "bg-gradient-to-r from-green-400 to-emerald-500",
      title: "Morning Energy Ritual",
      description:
        '"I used to need 3 coffees just to function... until I discovered this 30-second morning ritual that changed everything..."',
      buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    {
      id: 4,
      category: "Fitness & Weight Loss",
      categoryColor: "bg-gradient-to-r from-orange-400 to-red-500",
      title: "The 5-Minute Ab Transformer",
      description:
        '"Forget hour-long workouts. This 5-minute routine helped me lose 2 inches off my waist in just 14 days..."',
      buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    {
      id: 5,
      category: "Tech & Gadgets",
      categoryColor: "bg-gradient-to-r from-blue-500 to-purple-600",
      title: "Phone Battery Life Extender",
      description:
        '"My phone used to die by noon every day... until I found this hidden setting that doubled my battery life instantly..."',
      buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    {
      id: 6,
      category: "Beauty & Skincare",
      categoryColor: "bg-gradient-to-r from-pink-400 to-purple-500",
      title: "The Overnight Glow Secret",
      description:
        '"I woke up with the best skin of my life after using THIS $12 product that no one is talking about..."',
      buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
  ];

  const categories = [
    "All Niches",
    ...new Set(scripts.map((script) => script.category)),
  ];

  const filteredScripts =
    selectedNiche === "All Niches"
      ? scripts
      : scripts.filter((script) => script.category === selectedNiche);

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
    <section
      id="scripts"
      className="min-h-screen section-alt py-10 lg:py-14 px-2 md:px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--firstColor)] to-purple-600 bg-clip-text text-transparent mb-6">
            Viral UGC Scripts
          </h1>

          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready-to-use scripts that have generated millions of views. Simply
            copy, personalize, and watch your content go viral.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="input-field appearance-none rounded-lg px-6 py-3 pr-12 font-medium min-w-48 focus:outline-none focus:ring-2 focus:ring-[var(--firstColor)]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Script Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {filteredScripts.map((script) => (
            <div
              key={script.id}
              className="card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className={`${script.categoryColor} h-2`}></div>

              {/* Card Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${script.categoryColor}`}
                  >
                    {script.category}
                  </span>
                  <button className="p-2 rounded-lg hover:bg-[var(--card-hover)] transition-colors">
                    <Bookmark className="w-4 h-4 text-[var(--text-muted)] hover:text-[var(--firstColor)]" />
                  </button>
                </div>

                {/* Script Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-[var(--firstColor)] transition-colors duration-300">
                  {script.title}
                </h3>

                {/* Script Preview */}
                <p className="text-secondary leading-relaxed mb-6 text-sm italic">
                  {script.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className={`flex-1 text-white py-2 md:py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${script.buttonColor}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Play className="w-3 md:w-4 h-4" />
                      View Script
                    </div>
                  </button>

                  <button className="btn-secondary px-4 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Create Viral Content?
            </h3>
            <p className="text-secondary mb-6">
              Get instant access to our complete library of viral UGC scripts
              and start creating content that converts.
            </p>

            <button
              onClick={handleClick}
              className="group cursor-pointer btn-primary px-8 py-3 rounded-xl font-normal hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="flex gap-1 items-center justify-center">
                Get Full Access Now
                <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                  <FaLongArrowAltRight />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptSection;

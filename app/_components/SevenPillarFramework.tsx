"use client";
import React, { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

const SevenPillarFramework = () => {
  const [showAll, setShowAll] = useState(false);
  const [isUser, setISUser] = useState(false);

  const pillars = [
    {
      id: 1,
      number: "1",
      title: "Hook (0-5s)",
      description:
        "Grab attention instantly with a bold claim, surprising fact, or intriguing question that makes viewers stop scrolling.",
      color: "bg-gradient-to-r from-pink-400 to-pink-500",
      borderColor: "border-pink-400",
      position: "top",
    },
    {
      id: 2,
      number: "2",
      title: "Bridge (5-10s)",
      description:
        "Connect with viewers by acknowledging their problem and establishing your credibility or experience.",
      color: "bg-gradient-to-r from-purple-400 to-purple-500",
      borderColor: "border-purple-400",
      position: "top",
    },
    {
      id: 3,
      number: "3",
      title: "Pain (10-15s)",
      description:
        "Highlight the frustration of outdated solutions and why traditional approaches fail to solve the problem.",
      color: "bg-gradient-to-r from-blue-400 to-blue-500",
      borderColor: "border-blue-400",
      position: "top",
    },
    {
      id: 4,
      number: "4",
      title: "Opportunity (15-20s)",
      description:
        "Introduce the product as the hero solution, focusing on its unique benefits and how it solves the problem.",
      color: "bg-gradient-to-r from-green-400 to-green-500",
      borderColor: "border-green-400",
      position: "top",
    },
    {
      id: 5,
      number: "5",
      title: "Epiphany (20-25s)",
      description:
        'Share your personal results or transformation, creating an "aha moment" that builds desire for the product.',
      color: "bg-gradient-to-r from-yellow-400 to-orange-400",
      borderColor: "border-yellow-400",
      position: "bottom",
    },
    {
      id: 6,
      number: "6",
      title: "Twist (25-28s)",
      description:
        "Create urgency with a limited-time offer, scarcity, or by highlighting what viewers will miss out on.",
      color: "bg-gradient-to-r from-orange-400 to-red-400",
      borderColor: "border-orange-400",
      position: "bottom",
    },
    {
      id: 7,
      number: "7",
      title: "CTA (28-30s)",
      description:
        "End with a clear, compelling call-to-action that tells viewers exactly what to do next to get the product.",
      color: "bg-gradient-to-r from-red-400 to-pink-500",
      borderColor: "border-red-400",
      position: "bottom",
    },
  ];

  const visiblePillars = showAll ? pillars : pillars.slice(0, 3);

  const handleClick = () => {
    if (isUser) {
      setShowAll(true);
    } else {
      const modal = document.getElementById(
        "login_modal_button"
      ) as HTMLDialogElement | null;
      if (modal) {
        modal.showModal();
      }
    }
  };

  return (
    <section
      id="how-it-works"
      className="section-container py-10 md:py-14 px-2 md:px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The 7-Pillar Framework
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Our proven structure for creating viral UGC videos that convert
            viewers into customers in just 30 seconds.
          </p>
        </div>

        {/* Pillar Cards - Fixed Height Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {visiblePillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 rounded-xl shadow-lg ${pillar.color} text-white transition-all duration-300 hover:scale-[1.02] flex flex-col h-full`}
            >
              <div className="flex items-start gap-4 flex-grow">
                <div className="text-3xl font-bold">{pillar.number}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && pillars.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={handleClick}
              className="group cursor-pointer btn-primary px-8 py-3 rounded-xl font-normal hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="flex gap-1 items-center">
                Get Full Access Now
                <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                  <FaLongArrowAltRight />
                </span>
              </span>
            </button>
          </div>
        )}

        {/* Show less Button */}
        {showAll == true && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <span className="flex">
                Show Less Pillars{" "}
                <span className="text-2xl">
                  <BiUpArrowAlt />
                </span>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SevenPillarFramework;
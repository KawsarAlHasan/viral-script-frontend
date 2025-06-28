"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Zap,
} from "lucide-react";
import image from "@/public/image.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
  const [isUser, setIsUser] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStats, setActiveStats] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Creators Using",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      value: "2.4M",
      label: "Viral Videos",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      value: "4.9★",
      label: "Creator Rating",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const floatingWords = ["Viral", "Trending", "Engaging", "Creative"];

  return (
    <section id="home" className="relative  section-container overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0">
                {floatingWords.map((word, index) => (
                    <div
                        key={word}
                        className={`absolute text-4xl md:text-6xl font-bold text-[var(--text-muted)] animate-pulse opacity-20 select-none
                            ${index === 0 ? 'top-5 left-5 md:top-20 md:left-10 animate-bounce' : ''}
                            ${index === 1 ? 'top-50 md:top-40 right-5 md:right-20 animate-pulse' : ''}
                            ${index === 2 ? 'bottom-40 left-20 animate-bounce' : ''}
                            ${index === 3 ? 'bottom-20 right-10 animate-pulse' : ''}
                        `}
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        {word}
                    </div>
                ))}
            </div> */}

      <div className="relative mx-2  lg:mx-[120px] py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div
            className={`flex-1 pr-0 md:pr-12 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Heading */}
            <div className="mb-6 ">
              <h1 className="text-[26px] md:text-[50px] font-extrabold leading-tight text-primary">
                <span className="block transform hover:scale-105 transition-transform duration-300">
                  Unlock the Secret to
                </span>
                <span className="block text-[var(--firstColor)] bg-gradient-to-r from-[var(--firstColor)] to-purple-600 bg-clip-text animate-pulse">
                  Viral UGC Videos
                </span>
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--firstColor)] to-purple-600 rounded-full"></div>
                <Zap className="w-5 h-5 text-[var(--firstColor)] animate-bounce" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[20px] text-secondary leading-relaxed mb-8 max-w-2xl">
              Proven 7-step scripts used by top creators on
              <span className="font-semibold text-[#f161a6]">
                {" "}
                TikTok, Reels & Shorts.
              </span>
            </p>

            {/* Stats Row */}
            <div className="flex gap-3 md:gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-500 ${
                      activeStats === index
                        ? "card shadow-lg scale-105 border-2 border-[var(--firstColor)]/20"
                        : "card hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${stat.gradient}`}
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            {isUser ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-3/4 ">
                <button className="cursor-pointer btn-primary group relative px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Browse Scripts
                  </div>
                </button>

                <button className="cursor-pointer group bg-[var(--secondColor)] text-black px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-transparent hover:border-[var(--firstColor)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    Generate Your Own
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-3/4">
                <button
                  onClick={() => {
                    const modal = document.getElementById(
                      "login_modal_button",
                    ) as HTMLDialogElement | null;
                    if (modal) {
                      modal.showModal();
                    }
                  }}
                  className="cursor-pointer btn-primary group relative px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Browse Scripts
                  </div>
                </button>

                <button
                  onClick={() => {
                    const modal = document.getElementById(
                      "login_modal_button",
                    ) as HTMLDialogElement | null;
                    if (modal) {
                      modal.showModal();
                    }
                  }}
                  className="cursor-pointer group bg-[var(--secondColor)] text-black px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-transparent hover:border-[var(--firstColor)]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    Generate Your Own
                    <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </button>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-[var(--card-bg)]"
                    ></div>
                  ))}
                </div>
                <span>Join 50,000+ creators</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`flex-1 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[var(--firstColor)]/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Floating Action Buttons */}
              <div className="absolute -top-6 -right-6 card rounded-full p-3 shadow-lg animate-bounce border border-[var(--firstColor)]/20">
                <TrendingUp className="w-6 h-6 text-[var(--firstColor)]" />
              </div>

              <div className="absolute -bottom-6 -left-6 card rounded-full p-3 shadow-lg animate-pulse border border-purple-600/20">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>


              {/* নিচের ইমেজে ক্লিক করলে 
                 <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9f0PlqjDwPU?si=eo2Q9dA_Rh-Uq140"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> এই ভিডিও চালু হবে ইমেজের পজিশনে আবার ভিডিও পস করলে আবার ইমেজ দেখাবে  */}

              {/* Main Image Container */}
              <div className="relative card backdrop-blur-sm rounded-3xl p-6 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                    <div className="card rounded-full p-4 shadow-lg animate-pulse">
                      <Play className="w-8 h-8 text-[var(--firstColor)] fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics Floating Card */}
              <div className="absolute top-1/2 -right-8 card backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--firstColor)]">
                    98%
                  </div>
                  <div className="text-xs text-secondary">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
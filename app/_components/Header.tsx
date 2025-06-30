"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Zap,
} from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
  const [isUser, setIsUser] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStats, setActiveStats] = useState(0);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

        // Send play/pause command to iframe
        if (isInView) {
          videoRef.current.src =
            videoRef.current.src.replace("&autoplay=0", "") + "&autoplay=1";
        } else {
          videoRef.current.src =
            videoRef.current.src.replace("&autoplay=1", "") + "&autoplay=0";
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      id="home"
      className="relative  overflow-hidden bg-[#f9fafb] dark:bg-[#111111]"
    >
      <div className="relative mx-4 lg:mx-[60px] xl:mx-[105px] py-10 lg:py-14">
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
            <div className="mb-6">
              <h1 className="text-[26px] md:text-[30px] lg:text-[35px] xl:text-[50px] font-extrabold leading-tight text-primary">
                <span className="block transform hover:scale-105 transition-transform duration-300">
                  Unlock the Secret to
                </span>
                <span className="block text-[#ff3898] bg-gradient-to-r from-[#ff3898] to-purple-600 bg-clip-text animate-pulse">
                  Viral UGC Videos
                </span>
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-[#ff3898] to-purple-600 rounded-full"></div>
                <Zap className="w-5 h-5 text-[#ff3898] animate-bounce" />
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
                        ? "card shadow-lg scale-105 border-2 border-[#ff3898]/20"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 w-full xl:w-4/5">
              {/* Primary Button */}
              <button
                onClick={handleClick}
                className="relative group btn-primary overflow-hidden px-6 py-3 sm:px-7 sm:py-3.5 md:px-6 md:py-3 lg:px-7 lg:py-4 xl:px-8 xl:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Button content */}
                <div className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Browse Scripts</span>
                </div>
              </button>

              {/* Secondary Button */}
              <button
                onClick={handleClick}
                className="group relative bg-[#00ff8c] hover:bg-[#00e67d] text-black px-6 py-3 sm:px-7 sm:py-3.5 md:px-6 md:py-3 lg:px-7 lg:py-4 xl:px-8 xl:py-4 rounded-2xl font-semibold text-base sm:text-lg border-2 border-transparent hover:border-[#ff3898]/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-lg"
              >
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className="whitespace-nowrap">Generate Your Own</span>
                  <FaLongArrowAltRight className="text-xl mt-0.5 transform transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-2" />
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-[#ffffff] dark:border-[#1a1a1a]"
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

          {/* Right Image/Video */}
          <div
            className={`w-full md:w-4/5 flex-1 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#ff3898]/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Floating Action Buttons */}
              <div className="absolute -top-6 -right-6 card rounded-full p-3 shadow-lg animate-bounce border border-[#ff3898]/20">
                <TrendingUp className="w-6 h-6 text-[#ff3898]" />
              </div>

              <div className="absolute -bottom-6 -left-6 card rounded-full p-3 shadow-lg animate-pulse border border-purple-600/20">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>

              {/* Main Video Container */}
              <div className="relative card backdrop-blur-sm rounded-3xl p-3 md:p-5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <iframe
                    ref={videoRef}
                    width="460"
                    height="315"
                    src="https://www.youtube.com/embed/lW8bZkYEud8?si=lVHjc2ZsD4WeNedW&autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-auto md:h-[300px]"
                  />
                </div>
              </div>

              {/* Success Metrics Floating Card */}
              <div className="absolute top-1/2 -right-8 card backdrop-blur-sm rounded-2xl p-2 shadow-lg animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff3898]">98%</div>
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

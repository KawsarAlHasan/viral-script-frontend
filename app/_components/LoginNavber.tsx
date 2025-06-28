"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRouter } from "next/navigation";

const LoginNavber = () => {
  const router = useRouter();

  const hinddleOnClick = () => {
    localStorage.removeItem("billingPeriod");
    localStorage.removeItem("planId");

    router.push("/");
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-[var(--navbar-bg)]/95 border-b border-[var(--navbar-border)] py-4 px-4 lg:px-[120px]">
        {/* Logo Section - Fixed the flex issue */}
        <div className="flex-1">
          <button
            onClick={hinddleOnClick}
            className="flex items-center space-x-1 lg:space-x-3 logo-container cursor-pointer lg:mr-4"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white transform -rotate-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <div
                className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--secondColor)] rounded-full animate-pulse"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              ></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold logo-gradient leading-tight">
                ViralScript
                <span className="text-[var(--firstColor)]">Library</span>
              </h2>
            </div>
          </button>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default LoginNavber;

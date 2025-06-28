"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
   const [darkMode, setDarkMode] = useState(false);
 
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Scripts", href: "/#scripts" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Templates", href: "/#templates" },
    { name: "Pricing", href: "/#pricing" },
  ];

  const hinddleOnClick = () => {
    localStorage.removeItem("billingPeriod");
    localStorage.removeItem("planId");

    router.push("/");
  };

  return (
    <div className="relative">
      <div className="navbar fixed top-0 right-0 left-0 z-50 navbar-backdrop bg-[var(--navbar-bg)]/95 border-b border-[var(--navbar-border)] shadow-sm py-4 lg:px-[120px]">
        <div className="navbar-start">
          <button onClick={()=> setDarkMode(!darkMode)}>Toggle</button>
          {/* logo */}
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="nav-link text-[var(--navbar-text)] hover:text-[var(--firstColor)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="nav-link text-[var(--navbar-text)] hover:text-[var(--firstColor)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="nav-link text-[var(--navbar-text)] hover:text-[var(--firstColor)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer font-medium"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="group font-semibold md:px-6 rounded-full btn-primary hover:shadow-lg  hover:scale-105   bg-blue-400 text-white nav-link hover:text-[var(--firstColor)] px-4 py-2 transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer"
                >
                  AI Generator
                </Link>
              </li>
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex ">
          <div className="mr-4">
            <ThemeSwitcher />
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/login"
                className="nav-link text-[var(--navbar-text)] hover:text-[var(--firstColor)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer font-medium"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                href="/signup"
                className="group font-semibold md:px-6 rounded-full btn-primary hover:shadow-lg  hover:scale-105   bg-blue-400 text-white nav-link hover:text-[var(--firstColor)] px-4 py-2 transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer"
              >
                AI Generator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

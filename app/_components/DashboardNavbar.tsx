import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const DashboardNavbar = () => {
  return (
    <div className="">
      {/* sticky top-0 z-50 */}
      <div className="navbar bg-[#ffffff]/95 dark:bg-[#1a1a1a]/95 border-b border-[#e5e7eb] dark:border-[#2a2a2a] py-4 px-4 lg:px-[120px]">
        {/* Logo Section - Fixed the flex issue */}
        <div className="flex-1">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative flex-shrink-0">
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
                className="absolute -top-1 -right-1 w-4 h-4 bg-[#00ff8c] rounded-full animate-pulse"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              ></div>
            </div>
            <div className="flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold logo-gradient leading-tight">
                  ViralScript
                  <span className="text-[#ff3898]">Library</span>
                </h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Welcome Message - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 text-sm text-[#6b7280] dark:text-[#a1a1aa] mx-4">
          <span>Welcome, Creator!</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center">
          <div className="hidden md:flex">
            <ThemeSwitcher />
          </div>

          {/* User Avatar Dropdown */}
          <div className="dropdown dropdown-end mx-2 md:mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <label
            htmlFor="my-drawer-2"
            tabIndex={2}
            className="btn btn-ghost md:hidden "
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

"use client";
import ThemeSwitcher from "@/app/_components/ThemeSwitcher";
import Link from "next/link";
import { useState } from "react";
import {
  FiUser,
  FiLock,
  FiBell,
  FiCreditCard,
  FiGlobe,
  FiMoon,
  FiLogOut,
} from "react-icons/fi";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="my-4 text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#111827] via-[#ff3898] dark:from-[#ededed] to-purple-600 bg-clip-text text-transparent mb-6">
            Settings
          </h1>
          <p className="textGray600">Manage your account preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="card rounded-xl shadow-sm divide-y divide-gray-200">
          {/* Account Section */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiUser className="text-blue-500" size={20} />
              <h2 className="text-xl font-semibold">Account</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Profile Information</h3>
                  <p className="text-sm textGray600">
                    Update your name, email, and profile picture
                  </p>
                </div>
                <button className="px-4 py-2 text-sm btn rounded-lg transition-colors">
                  Edit Profile
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Change Password</h3>
                  <p className="text-sm textGray600">
                    Update your account password
                  </p>
                </div>
                <button className="px-4 py-2 text-sm btn rounded-lg transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiMoon className="text-indigo-500" size={20} />
              <h2 className="text-xl font-semibold">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm textGray600">
                    Toggle between light and dark theme
                  </p>
                </div>
                <ThemeSwitcher />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm textGray600">
                    Enable or disable notifications
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Billing Section */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiCreditCard className="text-green-500" size={20} />
              <h2 className="text-xl font-semibold">Billing</h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Payment Methods</h3>
                  <p className="text-sm textGray600">
                    Manage your payment options
                  </p>
                </div>
                <button className="px-4 py-2 text-sm btn rounded-lg transition-colors">
                  Manage Payments
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-medium">Billing History</h3>
                  <p className="text-sm textGray600">
                    View your past invoices
                  </p>
                </div>
                <button className="px-4 py-2 text-sm btn rounded-lg transition-colors">
                  View History
                </button>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FiLogOut className="text-red-500" size={20} />
              <h2 className="text-xl font-semibold">Actions</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full px-4 text-center py-3  text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                Delete Account
              </button>
             <Link href="/">
              <button className="w-full px-4 py-3 text-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Logout
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

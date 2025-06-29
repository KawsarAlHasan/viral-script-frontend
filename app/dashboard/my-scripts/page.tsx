"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiFilter,
} from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";

const MyScripts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Sample script data
  const scripts = [
    {
      id: 1,
      title: "Product Launch Video",
      description: "Script for our new skincare line launch",
      category: "Casual",
      date: "2023-05-15",
      length: "2:30",
    },
    {
      id: 2,
      title: "Tutorial Series",
      description: "How-to videos for our mobile app",
      category: "Professional",
      date: "2023-06-22",
      length: "5:45",
    },
    {
      id: 3,
      title: "Brand Story",
      description: "Our company origin story narrative",
      category: "Excited",
      date: "2023-04-10",
      length: "3:15",
    },
    // {
    //   id: 4,
    //   title: "Educational Series",
    //   description: "Learning materials for students",
    //   category: "Educational",
    //   date: "2023-07-01",
    //   length: "4:20",
    // },
  ];

  const filteredScripts = scripts.filter((script) => {
    // First filter by search query
    const matchesSearch =
      script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Then filter by active tab
    const matchesTab = 
      activeTab === "all" || 
      script.category.toLowerCase() === activeTab.toLowerCase();
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen section-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="my-4 text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#111827] via-[#ff3898] dark:from-[#ededed]  to-purple-600 bg-clip-text text-transparent mb-6">
            My Scripts
          </h1>
          <p className="max-w-2xl mx-auto textGray600">
            Manage all your generated scripts in one place. Edit, download, or
            create new scripts effortlessly.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search scripts..."
              className="bg-white dark:bg-black pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <Link
              href="/dashboard/ai-script-generator"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiPlus />
              <span>New Script</span>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {["all", "Casual", "Professional", "Excited", "Educational"].map(
            (tab) => (
              <button
                key={tab}
                className={`cursor-pointer px-4 py-2 font-medium capitalize ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "textGray600 hover:text-gray-700"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* Scripts Grid */}
        {filteredScripts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScripts.map((script) => (
              <div
                key={script.id}
                className="card backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold ">{script.title}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {script.category}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span>Created: {script.date}</span>
                    <span>Length: {script.length}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg transition-colors">
                      <FaRegEye size={14} />
                      View
                    </button>
                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg transition-colors">
                      <FiDownload size={14} />
                      Download
                    </button>
                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg transition-colors ml-auto">
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card rounded-xl shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-medium mb-2">No scripts found</h3>
              <p className="textGray600 mb-6">
                {searchQuery
                  ? "Try a different search term"
                  : "Create your first script to get started"}
              </p>
              <Link
                href="/dashboard/ai-script-generator"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create New Script
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyScripts;
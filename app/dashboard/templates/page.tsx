"use client";
import { useState } from "react";
import { FiDownload, FiStar, FiClock, FiFile, FiSearch } from "react-icons/fi";
import { FaRegFilePdf, FaRegFileExcel, FaRegFileArchive } from "react-icons/fa";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const templates = [
    {
      id: 1,
      name: "7-Pillar UGC Script Template",
      type: "PDF",
      downloads: "2.4K",
      rating: 4.9,
      size: "2.1 MB",
      created_at: "2023-10-15",
      icon: <FaRegFilePdf className="text-red-500" size={24} />,
    },
    {
      id: 2,
      name: "Viral Script Tracking Sheet",
      type: "Excel",
      downloads: "1.8K",
      rating: 4.8,
      size: "1.5 MB",
      created_at: "2023-09-22",
      icon: <FaRegFileExcel className="text-green-500" size={24} />,
    },
    {
      id: 3,
      name: "Weekly Script Drop Archive",
      type: "ZIP",
      downloads: "3.2K",
      rating: 4.9,
      size: "45.2 MB",
      created_at: "2023-11-05",
      icon: <FaRegFileArchive className="text-yellow-500" size={24} />,
    },
  ];

  // Filter templates based on search query
  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="my-4 text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--firstColor)] to-purple-600 bg-clip-text text-transparent mb-6">
            Templates Library
          </h1>
          <p className="textGray600 max-w-2xl mx-auto">
            Premium templates to accelerate your content creation workflow
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="card rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{template.name}</h3>
                      <span className="text-xs">{template.type} File</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-1 text-sm">
                      <FiDownload size={14} />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <FiStar className="text-yellow-500" size={14} />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <FiFile size={14} />
                      <span>{template.size}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm">
                      <FiClock size={14} />
                      <span>Added {template.created_at}</span>
                    </div>
                    <button className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="textGray600">
                No templates found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Templates;

"use client";

import React, { useState, SetStateAction } from "react";
import {
  FileText,
  BarChart3,
  Calendar,
  Download,
  Check,
  Star,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";

type TemplateTypes = {
  templateId: SetStateAction<null>;
  downloadType: string;
};

const TemplateSection = () => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadedIds, setDownloadedIds] = useState(new Set());
  const [isUser, setISUser] = useState(false);

  const templates = [
    {
      id: "ugc-script",
      title: "7-Pillar UGC Script Template",
      description:
        "Fill-in-the-blanks template with prompts for each section of the 7-pillar framework. Perfect for quickly drafting viral scripts.",
      icon: FileText,
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      downloadType: "PDF",
      stats: { downloads: "2.4k", rating: 4.9, time: "5 min" },
      features: [
        "Ready-to-use prompts",
        "Professional formatting",
        "Quick setup",
      ],
    },
    {
      id: "tracking-sheet",
      title: "Viral Script Tracking Sheet",
      description:
        "Track the performance of your UGC videos with this spreadsheet. Analyze what works and optimize your future content.",
      icon: BarChart3,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      downloadType: "Excel",
      stats: { downloads: "1.8k", rating: 4.8, time: "3 min" },
      features: [
        "Performance metrics",
        "Analytics dashboard",
        "Growth tracking",
      ],
    },
    {
      id: "script-archive",
      title: "Weekly Script Drop Archive",
      description:
        "Access our complete archive of weekly script drops, organized by date and niche. Never run out of content ideas.",
      icon: Calendar,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      downloadType: "ZIP",
      stats: { downloads: "3.2k", rating: 4.9, time: "10 min" },
      features: ["500+ script ideas", "Organized by niche", "Regular updates"],
    },
  ];

  const handleDownload = async ({
    templateId,
    downloadType,
  }: TemplateTypes) => {
    setDownloadingId(templateId);

    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setDownloadingId(null);
    setDownloadedIds((prev) => new Set([...prev, templateId]));

    // In a real app, this would trigger the actual download
    console.log(`Downloading ${downloadType} for ${templateId}`);
  };

  const getIconForDownloadType = (type) => {
    switch (type) {
      case "PDF":
        return "📄";
      case "Excel":
        return "📊";
      case "ZIP":
        return "📦";
      default:
        return "📄";
    }
  };

  const handleClick = () => {
    if (isUser) {
      console.log("hello world");
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
      id="templates"
      className="min-h-screen section-alt py-10 md:py-14 px-2 md:px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--firstColor)] to-purple-600 bg-clip-text text-transparent mb-6">
            Downloadable Templates
          </h1>

          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Get instant access to our ready-to-use templates that make creating
            viral UGC content quick and easy.
          </p>

          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 hidden md:block" />
              <span>7,400+ downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 hidden md:block" />
              <span>98% success rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 hidden md:block" />
              <span>Instant access</span>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mg:gap-8">
          {templates.map((template) => {
            const IconComponent = template.icon;
            const isDownloading = downloadingId === template.id;
            const isDownloaded = downloadedIds.has(template.id);

            return (
              <div
                key={template.id}
                className="group relative card backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="relative">
                  <div
                    className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-gradient-to-br ${template.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-[var(--firstColor)] transition-all duration-300">
                      {template.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-[var(--section-bg)] rounded-full text-muted border border-[var(--border-color)]">
                      {getIconForDownloadType(template.downloadType)}{" "}
                      {template.downloadType}
                    </span>
                  </div>

                  <p className="text-secondary leading-relaxed mb-6">
                    {template.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[var(--section-bg)] rounded-2xl border border-[var(--border-color)]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {template.stats.downloads}
                    </div>
                    <div className="text-xs text-muted">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-lg font-bold text-primary">
                        {template.stats.rating}
                      </span>
                    </div>
                    <div className="text-xs text-muted">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {template.stats.time}
                    </div>
                    <div className="text-xs text-muted">Setup</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-secondary mb-2">
                    Features:
                  </div>
                  <div className="space-y-1">
                    {template.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-secondary"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[var(--firstColor)] to-purple-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleClick}
                  className={`z-10 cursor-pointer w-full py-3 md:py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 
                    bg-gradient-to-r ${template.gradient} hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download {template.downloadType}</span>
                    </>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 md:mt-16">
          <div className="card backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Custom Templates?
            </h3>
            <p className="text-secondary mb-6">
              We create bespoke templates tailored to your specific niche and
              content strategy.
            </p>

            <button
              onClick={handleClick}
              className="group cursor-pointer btn-primary px-8 py-3 rounded-xl font-normal hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="flex gap-1 items-center justify-center">
                Get Custom Templates
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

export default TemplateSection;

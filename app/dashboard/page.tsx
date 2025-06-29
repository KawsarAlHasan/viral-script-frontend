"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart3, Download, Filter, Heart, Zap, FileText,
  TrendingUp, Calendar, Star, Settings, Bell, Search,
  Play, Eye, Bookmark, Clock, Users, Target, Sparkles,
  ArrowRight, ChevronDown, Plus, History, Activity
} from 'lucide-react';

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);

  const stats = [
    {
      label: 'Scripts Used',
      value: '347/500',
      progress: 69.4,
      color: 'from-pink-500 to-rose-500',
      icon: FileText,
      trend: '+23 this week'
    },
    {
      label: 'Downloads',
      value: '24',
      progress: 100,
      color: 'from-blue-500 to-cyan-500',
      icon: Download,
      trend: '12 pending'
    },
    {
      label: 'Favorites',
      value: '12',
      progress: 60,
      color: 'from-emerald-500 to-green-500',
      icon: Heart,
      trend: '3 new saves'
    },
    {
      label: 'AI Credits',
      value: '38',
      progress: 76,
      color: 'from-purple-500 to-indigo-500',
      icon: Sparkles,
      trend: 'Unlimited plan'
    }
  ];

  const recentScripts = [
    {
      id: 1,
      title: 'The 10-Second Skincare Hack',
      category: 'Beauty & Skincare',
      views: '2.4M',
      engagement: '12.5%',
      saved: true,
      trending: true,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'Morning Energy Ritual',
      category: 'Wellness & Supplements',
      views: '890K',
      engagement: '8.2%',
      saved: false,
      trending: false,
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      title: 'Phone Battery Life Extender',
      category: 'Tech & Gadgets',
      views: '1.2M',
      engagement: '15.3%',
      saved: true,
      trending: true,
      timeAgo: '1 day ago'
    }
  ];

  const downloadTemplates = [
    {
      name: '7-Pillar UGC Script Template',
      type: 'PDF',
      downloads: '2.4K',
      rating: 4.9,
      size: '2.1 MB'
    },
    {
      name: 'Viral Script Tracking Sheet',
      type: 'Excel',
      downloads: '1.8K',
      rating: 4.8,
      size: '1.5 MB'
    },
    {
      name: 'Weekly Script Drop Archive',
      type: 'ZIP',
      downloads: '3.2K',
      rating: 4.9,
      size: '45.2 MB'
    }
  ];

  const niches = ['Beauty & Skincare', 'Wellness & Supplements', 'Tech & Gadgets', 'Fashion & Style', 'Home & Cleaning', 'Fitness & Weight Loss'];

  const quickActions = [
    {
      title: 'Browse Your Script Quota',
      description: 'Track your monthly script usage and see how many scripts you have left to unlock.',
      icon: BarChart3,
      color: 'from-pink-500 to-rose-500',
      action: 'View Usage'
    },
    {
      title: 'Download PDF Templates',
      description: 'Access and download all templates to streamline your content creation process.',
      icon: Download,
      color: 'from-blue-500 to-cyan-500',
      action: 'Browse Templates'
    },
    {
      title: 'Filter Scripts by Niche',
      description: 'Easily find the perfect script for your product category or content niche.',
      icon: Filter,
      color: 'from-emerald-500 to-green-500',
      action: 'Explore Niches'
    },
    {
      title: 'Save Favorite Scripts',
      description: 'Organize your most successful scripts for quick access and future reference.',
      icon: Heart,
      color: 'from-yellow-500 to-orange-500',
      action: 'Manage Favorites'
    },
    {
      title: 'AI Script Generator',
      description: 'Create custom UGC scripts tailored to your specific product and audience (coming soon).',
      icon: Zap,
      color: 'from-purple-500 to-indigo-500',
      action: 'Coming Soon',
      comingSoon: true
    },
    {
      title: 'Access Script History',
      description: 'Review previously viewed and used scripts for consistent content creation.',
      icon: History,
      color: 'from-teal-500 to-cyan-500',
      action: 'View History'
    }
  ];

  return (
    <div className="min-h-screen section-container">

      <div className='w-full mx-auto card p-3 md:p-7 shadow-2xl rounded-2xl'>


        <div className="w-full mx-1 px-1 md:px-6 py-4 md:py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-4 md:mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="card backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-[#9ca3af] dark:text-[#71717a]">{stat.trend}</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-2xl font-bold text-[#111827] dark:text-[#ededed] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#6b7280] dark:text-[#a1a1aa]">{stat.label}</div>
                  </div>

                  <div className="w-full bg-[#e5e7eb] dark:bg-[#2a2a2a] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {/* Left Column - Scripts & Templates */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Scripts */}
              <div className="card backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm md:text-xl font-bold text-[#111827] dark:text-[#ededed]">Recent Scripts</h3>
                  <div className="flex gap-1 md:gap-2">
                    <button
                      onClick={() => setActiveTab('recent')}
                      className={`px-2 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-colors ${activeTab === 'recent' ? 'bg-pink-500 text-white' : 'btn-secondary'
                        }`}
                    >
                      Recent
                    </button>
                    <button
                      onClick={() => setActiveTab('trending')}
                      className={`px-2 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-colors ${activeTab === 'trending' ? 'bg-pink-500 text-white' : 'btn-secondary'
                        }`}
                    >
                      Trending
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentScripts.map((script) => (
                    <div key={script.id} className="flex items-center gap-2 md:gap-4 p-2 md:p-4 bg-[#f9fafb] dark:bg-[#111111] rounded-xl hover:bg-[#f9fafb] dark:hover:bg-[#2a2a2a] transition-colors group cursor-pointer">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm md:text-lg font-semibold text-[#111827] dark:text-[#ededed] truncate">{script.title}</h4>
                          {script.trending && (
                            <div className="error text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Trending
                            </div>
                          )}
                        </div>
                        <div className="hidden md:flex items-center gap-4 text-sm text-[#6b7280] dark:text-[#a1a1aa]">
                          <span>{script.category}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {script.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Activity className="w-3 h-3" />
                            {script.engagement}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center gap-2">
                        <span className="text-xs text-[#9ca3af] dark:text-[#71717a]">{script.timeAgo}</span>
                        <button className={`p-2 rounded-lg transition-colors ${script.saved ? 'bg-pink-100 text-pink-600' : 'btn-secondary'
                          }`}>
                          <Heart className={`w-4 h-4 ${script.saved ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Templates */}
            <div className="card backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm md:text-xl font-bold text-[#111827] dark:text-[#ededed]">Download Templates</h3>
                <button className="text-pink-500 hover:text-pink-600 text-xs md:text-sm font-medium flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {downloadTemplates.map((template, index) => (
                  <div key={index} className="flex items-center justify-between p-2 md:p-4 bg-[#f9fafb] dark:bg-[#111111] rounded-xl hover:bg-[#f9fafb] dark:hover:bg-[#2a2a2a] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-normal font-medium text-[#111827] dark:text-[#ededed]">{template.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-[#6b7280] dark:text-[#a1a1aa]">
                          <span>{template.type}</span>
                          <span>•</span>
                          <span>{template.size}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            {template.rating}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="hidden md:block bg-blue-500 text-white px-2 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                      <Download className="w-4 h-4" />
                    </button>

                    <button className="block md:hidden bg-blue-500 text-white px-2 py-2 rounded-lg text-sm font-medium transition-colors ">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - AI Generator & Niches */}
          <div className="space-y-6">
     
            {/* Popular Niches */}
            <div className="card backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#ededed] mb-6">Browse by Niche</h3>

              <div className="space-y-3">
                {niches.map((niche, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedNiche(niche)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${selectedNiche === niche
                      ? 'bg-pink-100 text-pink-800 border border-pink-200'
                      : 'bg-[#f9fafb] dark:bg-[#111111] text-[#6b7280] dark:text-[#a1a1aa] hover:bg-[#f9fafb] dark:hover:bg-[#2a2a2a]'
                      }`}
                  >
                    {niche}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto w-full">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div key={index} className="card backdrop-blur-sm rounded-2xl p-3 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-[#111827] dark:text-[#ededed] mb-2">{action.title}</h4>
                    <p className="text-sm text-[#6b7280] dark:text-[#a1a1aa] mb-4 leading-relaxed">{action.description}</p>

                    <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${action.comingSoon
                      ? 'text-purple-500 hover:text-purple-600'
                      : 'text-[#111827] dark:text-[#ededed] hover:text-[#ff3898]'
                      }`}>
                      {action.action}
                      {!action.comingSoon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
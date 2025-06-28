"use client";

import React, { useState } from "react";
import { Check, X, Zap, Crown, Sparkles, Shield, Calendar } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LoginNavber from "../_components/LoginNavber";
import plansData from "@/app/data/plan.json";

type PlanFeature = {
  name: string;
  included: boolean;
  comingSoon?: boolean;
};

type Plan = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  gradient: string;
  price: number;
  originalPrice: number | null;
  features: PlanFeature[];
  buttonText: string;
  buttonStyle: string;
  popular: boolean;
  savings: string | null;
};

const PricingAccess = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const router = useRouter();

  // Map icon strings to actual components
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Sparkles,
    Crown,
    Zap,
  };

  // Transform plans data based on billing period
  const plans: Plan[] = plansData.map((plan) => ({
    ...plan,
    price: billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice,
    originalPrice: billingPeriod === "annual" ? plan.annualOriginalPrice : null,
    icon: plan.icon, // Keep the icon string for mapping
  }));

  const handleClick = (id: string) => {
    localStorage.setItem("billingPeriod", billingPeriod);
    localStorage.setItem("planId", id);
    router.push("/payment");
  };

  return (
    <div>
      <LoginNavber />
      <div className="section-container py-10 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#111827] via-[#ff3898] to-purple-900 dark:from-[#ededed] bg-clip-text text-transparent mb-6">
              Pricing & Access
            </h1>

            <p className="text-lg md:text-xl text-[#6b7280] dark:text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your content creation needs. Unlock
              viral scripts that convert viewers into customers.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span
                className={`font-medium ${billingPeriod === "monthly" ? "text-[#111827] dark:text-[#ededed]" : "text-[#6b7280] dark:text-[#a1a1aa]"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingPeriod(
                    billingPeriod === "monthly" ? "annual" : "monthly",
                  )
                }
                className="cursor-pointer relative w-16 h-8 bg-[#e5e7eb] dark:bg-[#2a2a2a] rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-[#ffffff] dark:bg-[#1a1a1a] rounded-full shadow-md transform transition-transform duration-300 ${
                    billingPeriod === "annual"
                      ? "translate-x-8 bg-gradient-to-r from-blue-500 to-purple-500"
                      : ""
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span
                  className={`font-medium ${billingPeriod === "annual" ? "text-[#111827] dark:text-[#ededed]" : "text-[#6b7280] dark:text-[#a1a1aa]"}`}
                >
                  Annual
                </span>
                {billingPeriod === "annual" && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {plans.map((plan) => {
              const IconComponent = iconMap[plan.icon];
              const isHovered = hoveredPlan === plan.id;

              return (
                <div
                  key={plan.id}
                  className={`relative card backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 ${
                    plan.popular
                      ? "ring-2 ring-pink-200 shadow-2xl scale-105"
                      : "hover:shadow-2xl hover:scale-105"
                  }`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 ${
                      isHovered ? "opacity-5" : ""
                    } rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Plan Header */}
                  <div className="relative text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4 ${
                        isHovered ? "scale-110" : ""
                      } transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#111827] dark:text-[#ededed] mb-2">
                      {plan.name}
                    </h3>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-4xl font-bold text-[#111827] dark:text-[#ededed]">
                        ${plan.price}
                      </span>
                      <div className="text-left">
                        <div className="text-sm text-[#6b7280] dark:text-[#a1a1aa]">
                          per month
                        </div>
                        {plan.originalPrice && (
                          <div className="text-xs text-[#9ca3af] dark:text-[#71717a] line-through">
                            ${plan.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>

                    {plan.savings && (
                      <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium inline-block">
                        {plan.savings}
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            feature.included
                              ? "bg-green-100 text-green-600"
                              : "bg-[#f9fafb] dark:bg-[#111111] text-[#9ca3af] dark:text-[#71717a]"
                          }`}
                        >
                          {feature.included ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <X className="w-3 h-3" />
                          )}
                        </div>
                        <div className="flex-1">
                          <span
                            className={`text-sm ${
                              feature.included
                                ? "text-[#111827] dark:text-[#ededed]"
                                : "text-[#9ca3af] dark:text-[#71717a]"
                            }`}
                          >
                            {feature.name}
                          </span>
                          {feature.comingSoon && (
                            <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 w-full py-3 md:py-4 px-2 md:px-6 rounded-2xl font-normal md:font-semibold ${plan.buttonStyle} ${
                      isHovered ? "scale-105 shadow-lg" : ""
                    } ${plan.popular ? "shadow-lg" : ""}`}
                    onClick={() => handleClick(plan.id)}
                  >
                    <div className="flex gap-1 items-center justify-center">
                      {plan.buttonText}
                      <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                        <FaLongArrowAltRight />
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAccess;

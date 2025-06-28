"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  Zap,
  Crown,
  Sparkles,
  Shield,
  Calendar,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
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
  monthlyPrice: number;
  annualPrice: number;
  annualOriginalPrice: number | null;
  features: PlanFeature[];
  buttonText: string;
  buttonStyle: string;
  popular: boolean;
  savings: string | null;
};

const PricingAccess = () => {
  const [isUser, setIsUser] = useState(false);
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

  const plans = plansData.map((plan) => ({
    ...plan,
    price: billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice,
    originalPrice: billingPeriod === "annual" ? plan.annualOriginalPrice : null,
  }));

  const guarantees = [
    {
      icon: Calendar,
      title: "Cancel anytime",
      subtitle: "No long-term contracts",
      color: "text-[var(--text-secondary)]",
    },
    {
      icon: Zap,
      title: "Instant access after payment",
      subtitle: "Start creating immediately",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "7-day money-back guarantee",
      subtitle: "Risk-free trial period",
      color: "text-green-600",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Creators" },
    { value: "2.4M", label: "Viral Videos Created" },
    { value: "98%", label: "Success Rate" },
  ];

  const handleClick = (id: string) => {
    localStorage.setItem("billingPeriod", billingPeriod);
    localStorage.setItem("planId", id);

    if (isUser) {
      router.push("/payment");
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
    <div
      id="pricing"
      className="min-h-screen section-container py-10 md:py-14 px-2 md:px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--firstColor)] to-purple-900 bg-clip-text text-transparent mb-6">
            Pricing & Access
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your content creation needs. Unlock
            viral scripts that convert viewers into customers.
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-2 md:gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`font-medium ${billingPeriod === "monthly" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingPeriod(
                  billingPeriod === "monthly" ? "annual" : "monthly",
                )
              }
              className="relative w-16 h-8 bg-[var(--border-color)] rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-[var(--card-bg)] rounded-full shadow-md transform transition-transform duration-300 ${
                  billingPeriod === "annual"
                    ? "translate-x-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : ""
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`font-medium ${billingPeriod === "annual" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
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

                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-[var(--text-primary)]">
                      ${plan.price}
                    </span>
                    <div className="text-left">
                      <div className="text-sm text-[var(--text-secondary)]">
                        per month
                      </div>
                      {plan.originalPrice && (
                        <div className="text-xs text-[var(--text-muted)] line-through">
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
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included
                            ? "bg-green-100 text-green-600"
                            : "bg-[var(--section-bg)] text-[var(--text-muted)]"
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
                              ? "text-[var(--text-primary)]"
                              : "textGray600"
                          }`}
                        >
                          {feature.name}
                        </span>
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

        {/* Guarantees Section */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 card backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--section-bg)] flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${guarantee.color}`} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    {guarantee.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {guarantee.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingAccess;

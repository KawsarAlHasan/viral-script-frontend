"use client";

import { useEffect, useState } from "react";
import PayPalProvider from "../_components/PayPalProvider";
import PayPalButton from "../_components/PayPalButton";
import LoginNavber from "../_components/LoginNavber";
import { Zap, Crown, Sparkles } from "lucide-react";
import Link from "next/link";

type PlanDetails = {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
};

export default function PaymentPage() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [planDetails, setPlanDetails] = useState<PlanDetails | null>(null);

  useEffect(() => {
    const billingPeriod = localStorage.getItem("billingPeriod");
    const planId = localStorage.getItem("planId");

    // Get plan details based on stored IDs
    const getPlanDetails = () => {
      if (!planId || !billingPeriod) return null;

      // This would normally come from your database or plans data
      const plans = {
        creator: {
          name: "Creator Plan",
          monthlyPrice: 9.99,
          annualPrice: 7.99,
          features: [
            "200 scripts/month",
            "Script Library Access",
            "Basic Templates",
          ],
        },
        pro: {
          name: "Pro Creator",
          monthlyPrice: 24.99,
          annualPrice: 19.99,
          features: [
            "500 scripts/month",
            "Full Library Access",
            "All Templates",
            "Priority Support",
          ],
        },
        unlimited: {
          name: "Unlimited",
          monthlyPrice: 50,
          annualPrice: 40,
          features: [
            "1000+ scripts/month",
            "Full Library Access",
            "All Templates + Extras",
            "AI Script Generator",
            "VIP Support",
          ],
        },
      };

      const selectedPlan = plans[planId as keyof typeof plans];
      if (!selectedPlan) return null;

      const price =
        billingPeriod === "monthly"
          ? selectedPlan.monthlyPrice
          : selectedPlan.annualPrice;

      return {
        id: planId,
        name: selectedPlan.name,
        price,
        period: billingPeriod === "monthly" ? "month" : "year",
        features: selectedPlan.features,
      };
    };

    const details = getPlanDetails();
    setPlanDetails(details);
  }, []);

  const handleSuccess = (details: any) => {
    console.log("Payment completed:", details);
    setPaymentCompleted(true);
    // Here you would typically send the payment details to your backend
  };

  const handleError = (err: any) => {
    console.error("Payment error:", err);
    setError("Payment failed. Please try again.");
  };

  const getPlanIcon = (planId: string | null) => {
    switch (planId) {
      case "creator":
        return <Sparkles className="w-6 h-6 text-pink-500" />;
      case "pro":
        return <Crown className="w-6 h-6 text-blue-500" />;
      case "unlimited":
        return <Zap className="w-6 h-6 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <LoginNavber />

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Complete Your Subscription
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plan Information */}
          <div className="card rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

            {planDetails ? (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {getPlanIcon(planDetails.id)}
                  <div>
                    <h3 className="text-xl font-medium">{planDetails.name}</h3>
                    <p className="textGray600">
                      Billed {planDetails.period}ly
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Plan Includes:</h4>
                  <ul className="space-y-2">
                    {planDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total:</span>
                    <span className="text-2xl font-bold">
                      ${planDetails.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm textGray600 mt-1">
                    {planDetails.period === "year"
                      ? "Billed annually (save 20%)"
                      : "Billed monthly"}
                  </p>
                </div>
              </div>
            ) : (
              <p>Loading plan information...</p>
            )}
          </div>

          {/* Payment Section */}
          <div className="card rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

            {planDetails ? (
              <>
                <div className="mb-6">
                  <p className="text-lg mb-2">
                    You're subscribing to: <strong>{planDetails.name}</strong>
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    ${planDetails.price.toFixed(2)} per {planDetails.period}
                  </p>
                </div>

                <PayPalProvider>
                  <PayPalButton
                    amount={planDetails.price.toFixed(2)}
                    onSuccess={handleSuccess}
                    onError={handleError}
                  />
                </PayPalProvider>

                {paymentCompleted && (
                  <div className="mt-4 p-4  border border-green-200 rounded-lg text-green-800">
                    <h3 className="font-medium">Payment successful!</h3>
                    <p>
                      Thank you for your subscription. Your account will be
                      upgraded shortly.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mt-4 p-4  border border-red-200 rounded-lg text-red-800">
                    <h3 className="font-medium">Payment failed</h3>
                    <p>{error}</p>
                    <button
                      onClick={() => setError(null)}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Try again
                    </button>
                  </div>
                )}

                <div className="divider">OR</div>
                <Link className="btn btn-primary" href="/dashboard">Temporarily Skip Payment</Link>

                <p className="text-sm textGray600 mt-4">
                  Your subscription will automatically renew at the end of each
                  billing period. You can cancel anytime from your account
                  settings.
                </p>
              </>
            ) : (
              <p>Loading payment information...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

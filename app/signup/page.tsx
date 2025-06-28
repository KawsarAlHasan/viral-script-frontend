"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import LoginNavber from "../_components/LoginNavber";
import { useEffect, useState } from "react";

type SignUpFormInputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const [billingPeriod, setBillingPeriod] = useState<string | null>(null);
  const [planId, setPlanId] = useState<string | null>(null);

  useEffect(() => {
    const billingPd = localStorage.getItem("billingPeriod");
    const plnId = localStorage.getItem("planId");
    setBillingPeriod(billingPd);
    setPlanId(plnId);
  }, []);

  const onSubmit = async (data: SignUpFormInputs) => {
    localStorage.setItem("fullName", data.fullName);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);

    if (billingPeriod === null && planId === null) {
      router.push("/pricing");
    } else {
      router.push("/payment");
    }
  };

  return (
    <div>
      <LoginNavber />
      <div className="min-h-screen mt-[-88px] flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-md shadow-xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  className="input input-bordered w-full"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="group cursor-pointer btn-primary px-8 py-3 rounded-xl font-normal hover:shadow-lg transition-all duration-300 hover:scale-105 w-full"
                >
                  <div className="flex gap-1 items-center justify-center">
                    Sign Up & Countinue
                    <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </button>
              </div>
            </form>

            {/* Link to Login */}
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="link link-hover text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

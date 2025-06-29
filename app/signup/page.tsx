"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import LoginNavber from "../_components/LoginNavber";
import { useEffect, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

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
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="min-h-screen mt-[-85px] flex items-center justify-center p-4">
        <div className="card w-full max-w-md shadow-xl">
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
                  className="input input-bordered w-full bg-white dark:bg-black"
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
                  className="input input-bordered w-full bg-white dark:bg-black"
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

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="input input-bordered w-full bg-white dark:bg-black pr-10"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                  />
                  <button
                    type="button"
                    className="z-100 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaRegEye className="w-5 h-5" />
                    )}
                  </button>
                </div>

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

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Re-enter password"
                    className="input input-bordered w-full bg-white dark:bg-black pr-10"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    className="z-100 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash className="w-5 h-5" />
                    ) : (
                      <FaRegEye className="w-5 h-5" />
                    )}
                  </button>
                </div>

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

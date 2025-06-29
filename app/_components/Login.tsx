"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const [isClient, setIsClient] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data: LoginFormInputs) => {
    localStorage.setItem("fullName", "Testing Name");
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);

    router.push("/dashboard");
  };

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Login now!</h1>
      <div className="card w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input w-full bg-white dark:bg-black"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="type your password..."
                className="input input-bordered w-full bg-white dark:bg-black pr-10"
                {...register("password", {
                  required: "Password is required",
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </fieldset>
        </form>
      </div>

      <p className="text-center mt-4 text-sm">
        Don't have an account?{" "}
        <Link
          href="/signup"
          onClick={() => {
            const modal = document.getElementById(
              "login_modal_button",
            ) as HTMLDialogElement | null;
            modal?.close();
          }}
          className="link link-hover text-primary"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data: LoginFormInputs) => {
    localStorage.setItem("fullName", "Testing Name");
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);

    router.push("/dashboard");

    // // Wait for client-side values to be available
    // const currentBillingPeriod = localStorage.getItem("billingPeriod");
    // const currentPlanId = localStorage.getItem("planId");

    // if (!currentBillingPeriod && !currentPlanId) {
    //   router.push("/dashboard");
    // } else {
    //   router.push("/payment");
    // }

    (
      document.getElementById("login_modal_button") as HTMLDialogElement
    )?.close();
  };

  // Only render the form when we're on the client side
  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Login now!</h1>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="type your password..."
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
              })}
            />
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

import {
  EyeClosedIcon,
  EyeIcon,
  LockIcon,
  MailIcon,
  SpinnerIcon,
} from "@/components/icons/Icons.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignUpForm() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onFormSubmit = () => {
    setLoading(!loading);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <div>
        <label htmlFor="email" className="font-semibold text-gray-700">
          Email
        </label>
        <div className="flex items-center relative mt-1 mb-5">
          <span className="absolute left-3">
            <MailIcon
              className={`w-4.5 h-4.5 ${
                errors.email ? "text-red-500" : "text-gray-600"
              }`}
            />
          </span>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            {...register("email")}
            className="pl-10 pr-4 py-2 w-full rounded-lg border-2 focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400"
          />
        </div>
        {errors.email && (
          <p className="font-medium text-red-500 pt-1 pl-2">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="font-semibold text-gray-700">
          Password
        </label>
        <div className="flex items-center relative mt-1 mb-8">
          <span className="absolute left-3">
            <LockIcon
              className={`w-4.5 h-4.5 ${
                errors.email ? "text-red-500" : "text-gray-600"
              }`}
            />
          </span>
          <input
            id="password"
            type={passwordVisibility ? "text" : "password"}
            placeholder={passwordVisibility ? "Password" : "••••••••"}
            {...register("password")}
            className="pl-10 pr-4 py-2 w-full rounded-lg border-2 focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 cursor-pointer"
          >
            {passwordVisibility ? (
              <EyeIcon
                className={`w-4.5 h-4.5 ${
                  errors.email ? "text-red-500" : "text-gray-600"
                }`}
              />
            ) : (
              <EyeClosedIcon
                className={`w-4.5 h-4.5 ${
                  errors.email ? "text-red-500" : "text-gray-600"
                }`}
              />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="font-medium text-red-500 pt-1 pl-2">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        disabled={loading}
        className={`flex justify-center items-center py-2 w-full rounded-md ${loading ? "bg-neutral-700" : "bg-neutral-800"} transition-color duration-200 ease-in-out`}
      >
        {loading ? (
          <>
            <SpinnerIcon className="text-white w-4.5 h-4.5" />
            <span className="ml-3 font-medium text-white">Signing up...</span>
          </>
        ) : (
          <span className="font-medium text-white">Sign Up</span>
        )}
      </button>
    </form>
  );
}

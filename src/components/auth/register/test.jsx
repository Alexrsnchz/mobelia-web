function Test() {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-4">
        <label
          className="font-semibold text-gray-600 block mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <div className="relative flex items-center">
          <span
            className={`absolute left-3 ${
              errors.email ? "text-red-500" : "text-gray-400"
            }`}
          >
            <EmailIcon />
          </span>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            disabled={isLoading || socialProvider !== null}
            {...register("email")}
            className={`pl-10 pr-4 py-2 w-full rounded-lg border focus:outline-none ${
              errors.email
                ? "border-red-500 focus:border-red-500 text-red-500 placeholder-red-300"
                : "border-gray-300 focus:border-gray-500 text-gray-800 placeholder-gray-400"
            }`}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 pt-1 pl-2">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="font-semibold text-gray-600 block mb-2"
        >
          Password
        </label>
        <div className="relative flex items-center">
          <span
            className={`absolute left-3 ${
              errors.password ? "text-red-500" : "text-gray-400"
            }`}
          >
            <PasswordIcon />
          </span>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            disabled={isLoading || socialProvider !== null}
            {...register("password")}
            className={`pl-10 pr-4 py-2 w-full rounded-lg border focus:outline-none ${
              errors.password
                ? "border-red-500 text-red-500 placeholder-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-gray-500 text-gray-800 placeholder-gray-400"
            }`}
          />
        </div>
        {errors.password && (
          <p className="text-red-500 pt-1 pl-2">{errors.password.message}</p>
        )}
      </div>

      <div className="text-right mb-6">
        <Link
          to={"/"}
          className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
        >
          Forgot your password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isLoading || socialProvider !== null}
        className="bg-gray-800 text-white font-semibold py-2 w-full rounded-lg hover:bg-gray-700 disabled:bg-gray-700 transition duration-300"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}

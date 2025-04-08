import { useState } from "react";
import { Mail, Lock, Eye } from "lucide-react";

export default function RegisterPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-md w-full max-w-sm sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create your account
        </h2>

        {!showEmailForm ? (
          <>
            <div className="flex flex-col gap-3">
              <button
                className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100"
                onClick={() => setShowEmailForm(true)}
              >
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                Sign up with Email
              </button>

              <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285F4"
                    d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.2H272v95h147.1c-6.3 33.9-25.1 62.5-53.3 81.6v67h85.9c50.2-46.2 81.8-114.3 81.8-193.4z"
                  />
                  <path
                    fill="#34A853"
                    d="M272 544.3c72.6 0 133.6-24.1 178.1-65.5l-85.9-67c-23.9 16-54.4 25.4-92.2 25.4-70.9 0-131-47.9-152.5-112.3H30v70.6C74.8 486.3 167.2 544.3 272 544.3z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M119.5 324.9c-10-30-10-62.6 0-92.6V161.7H30c-36.2 72.5-36.2 158.3 0 230.8l89.5-67.6z"
                  />
                  <path
                    fill="#EA4335"
                    d="M272 107.7c39.5-.6 77.5 14 106.6 40.6l79.5-79.5C412.1 24.3 343.5-1.7 272 0 167.2 0 74.8 58 30 161.7l89.5 70.6C141 155.6 201.1 107.7 272 107.7z"
                  />
                </svg>
                Google
              </button>

              <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1877F2"
                    d="M279.1 288l14.2-92.7h-88.9v-60.2c0-25.4 12.5-50.1 52.5-50.1h40.6V6.3S293.2 0 261.9 0c-73.3 0-121.1 44.4-121.1 124.7v70.6H89v92.7h51.8V512h100.2V288z"
                  />
                </svg>
                Facebook
              </button>

              <button className="flex items-center justify-center w-full py-2 border rounded-md hover:bg-gray-100">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#F25022" d="M1 1h10v10H1z" />
                  <path fill="#7FBA00" d="M13 1h10v10H13z" />
                  <path fill="#00A4EF" d="M1 13h10v10H1z" />
                  <path fill="#FFB900" d="M13 13h10v10H13z" />
                </svg>
                Microsoft
              </button>
            </div>
          </>
        ) : (
          <form className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Eye className="h-5 w-5 text-gray-400" />
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

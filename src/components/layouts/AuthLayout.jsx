import AuthPage_background from "@/assets/images/AuthPage_background.webp";
import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";
import { Link } from "react-router";

export default function AuthLayout({ children }) {
  return (
    <div
      className="flex justify-center items-center w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${AuthPage_background})`,
      }}
    >
      <div className="p-10 rounded-xl border-3 border-neutral-400 bg-white">
        <div className="flex flex-col items-center space-y-2 mb-6">
          <img
            src={MobeliaLogo_badge}
            alt="Möbelia logo"
            className="w-18 h-10"
          />
          <span className="text-2xl font-bold">Möbelia</span>
        </div>

        {children}

        <div>
          <p className="text-center text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <Link
              to="/terms-service"
              className="font-semibold text-gray-800 hover:underline"
            >
              Terms of Service
            </Link>
            <br /> and{" "}
            <Link
              to="/privacy-policy"
              className="font-semibold text-gray-800 hover:underline"
            >
              Privacy Policy
            </Link>
            , including{" "}
            <Link
              to="cookies-policy"
              className="font-semibold text-gray-800 hover:underline"
            >
              Cookies
            </Link>{" "}
            use.
          </p>
        </div>
      </div>
    </div>
  );
}

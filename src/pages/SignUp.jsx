import SignUpForm from "@/components/auth/register/SignUpForm.jsx";
import { Link } from "react-router";
import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";
import LoginPage_background from "@/assets/images/LoginPage_background.webp";

export default function SignUp() {
  return (
    <div
      className="flex justify-center items-center w-full h-screen"
      style={{
        backgroundImage: `url(${LoginPage_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        <SignUpForm />
        <div className="text-center my-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/signin"}
              className="text-gray-800 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div>
          <p className="text-center text-sm text-gray-600">
            By Signing up, you agree to the{" "}
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

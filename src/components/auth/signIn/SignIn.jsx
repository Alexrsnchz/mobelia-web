import SignInForm from "@/components/auth/signIn/SignInForm.jsx";
import { Link } from "react-router";

export default function SignIn() {
  return (
    <>
      <SignInForm />
      <div className="text-center my-6">
        <p className="text-sm text-gray-600">
          Don't have an account yet?{" "}
          <Link
            to={"/auth/signup"}
            className="text-gray-800 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}

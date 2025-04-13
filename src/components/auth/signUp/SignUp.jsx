import SignUpForm from "@/components/auth/signUp/SignUpForm.jsx";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <>
      <SignUpForm />
      <div className="text-center my-6">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/auth/signin"}
            className="text-gray-800 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}

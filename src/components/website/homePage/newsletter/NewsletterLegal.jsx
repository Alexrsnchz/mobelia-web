import { Link } from "react-router";

export default function NewsletterLegal() {
  return (
    <p className="mt-5 max-w-xl text-xs text-center font-medium text-gray-600">
      By subscribing, you agree to our{" "}
      <Link
        to="/terms-service"
        className="font-semibold text-gray-800 hover:underline"
      >
        Terms
      </Link>{" "}
      and{" "}
      <Link
        to="/privacy-policy"
        className="font-semibold text-gray-800 hover:underline"
      >
        Privacy Policy
      </Link>
      . You can unsubscribe at any time.
    </p>
  );
}

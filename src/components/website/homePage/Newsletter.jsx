import { MailboxIcon } from "@/components/icons/Icons.jsx";
import { Link } from "react-router";

export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="flex flex-col items-center bg-stone-100 py-12 px-4">
        <div className="p-3 mb-3 rounded-full bg-stone-300">
          <MailboxIcon className="w-8 h-8 text-gray-800" />
        </div>
        <div className="mb-10 max-w-3xl text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Join Our Newsletter
          </h3>
          <p className="mt-2 text-base sm:text-lg text-gray-700 font-medium">
            Subscribe to get special offers, discounts, enter annual giveaways,
            <br className="hidden sm:block" />
            and receive updates about new products.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 w-full rounded-md border-2 border-stone-400 bg-white placeholder-gray-500 text-gray-800"
          />
          <button className="px-6 py-3 w-full sm:w-auto rounded-md cursor-pointer bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors duration-200 ease-in-out">
            Subscribe
          </button>
        </div>
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
      </div>
    </section>
  );
}

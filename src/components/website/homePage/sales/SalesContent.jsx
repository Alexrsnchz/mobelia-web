import { Link } from "react-router";

export default function SalesContent() {
  return (
    <div className="flex flex-col justify-center items-center absolute inset-0 px-4 md:px-0 space-y-8 lg:space-y-10 bg-black/40">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Summer Sales Are Here!
        </h3>
        <p className="mt-2 mx-auto max-w-lg lg:max-w-xl text-md md:text-xl text-medium text-white">
          Special discounts on outdoor furniture to enhance the visual appealing
          of your patio.
        </p>
      </div>
      <Link
        to="/sales"
        className="px-8 py-3 rounded-md bg-neutral-900 hover:bg-gray-100 text-white hover:text-gray-800 font-semibold shadow-md transition"
      >
        Go to sales
      </Link>
    </div>
  );
}

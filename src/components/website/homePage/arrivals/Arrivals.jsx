import { Link } from "react-router";
import arrivals from "@/assets/data/arrivalsData.js";
import { ArrowRightIcon } from "@/components/icons/Icons.jsx";
import ArrivalsCarousel from "@/components/website/homePage/arrivals/ArrivalsCarousel.jsx";

export default function Arrivals() {
  return (
    <section id="arrivals">
      <div className="mx-auto max-w-8xl pt-12">
        <div className="flex flex-col md:flex-row justify-between md:items-center px-4 md:px-12 pb-3">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
            New Arrivals
          </h3>
          <Link
            to="/furniture"
            className="flex items-center space-x-2 hover:underline hover:underline-offset-2"
          >
            <span className="md:text-lg lg:text-base font-semibold text-gray-800">
              View all products
            </span>
            <ArrowRightIcon className="w-5 h-5 mt-1 text-gray-800" />
          </Link>
        </div>

        <div className="px-2 md:px-10 pt-3 lg:pt-5">
          <ArrivalsCarousel products={arrivals} />
        </div>
      </div>
    </section>
  );
}

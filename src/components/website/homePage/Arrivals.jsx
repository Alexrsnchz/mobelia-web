import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon } from "@/components/icons/Icons.jsx";
import arrivalsData from "@/assets/data/arrivalsData.js";
import ArrivalsCarousel from "@/components/website/homePage/ArrivalsCarousel.jsx";

export default function Arrivals() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    setFurniture(arrivalsData);
  }, []);

  return (
    <section id="arrivals">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col md:flex-row justify-between md:items-center px-4 md:px-12 pb-3">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
            New Arrivals
          </h3>
          <Link
            to="/furniture"
            className="flex items-center space-x-2 hover:underline hover:underline-offset-2"
          >
            <span className="font-semibold text-gray-800">
              View all products
            </span>
            <ArrowRightIcon className="w-5 h-5 mt-1 text-gray-800" />
          </Link>
        </div>

        <div className="px-2 md:px-10 py-1 md:py-3">
          <ArrivalsCarousel products={furniture} />
        </div>
      </div>
    </section>
  );
}

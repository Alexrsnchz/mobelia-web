import { Link } from "react-router";
import heroProduct from "@/assets/images/homePage/hero/heroProduct.webp";
import AvatarGroup from "@/components/website/homePage/hero/AvatarGroup.jsx";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-8 py-5 md:py-26 gap-12 mx-auto max-w-7xl">
        <div className="order-2 md:order-1 space-y-9 max-w-xl text-center md:text-left">
          <h3 className="max-w-lg text-3xl md:text-5xl font-bold text-stone-800">
            Transform your space with style and comfort
          </h3>
          <p className="max-w-lg text-lg text-gray-700">
            Elevate every room with furniture that combines modern design and
            everyday comfort. Carefully crafted to last and fit your lifestyle.
          </p>

          <div className="space-y-14">
            <AvatarGroup />

            <Link
              to="/furniture"
              className="px-6 py-3 rounded-md group border-2 border-stone-600 hover:bg-stone-800 transition-colors duration-200 ease-in-out"
            >
              <span className="font-medium text-stone-800 group-hover:text-white">
                Start Your Furnishing Journey
              </span>
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 w-50 md:w-96 aspect-[4/4]">
          <img
            src={heroProduct}
            alt="Sofá moderno en una sala elegante"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

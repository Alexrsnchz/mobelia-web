import { Link } from "react-router";
import Featured from "@/assets/images/homePage_misc/featuredProduct.webp";
import { LeafIcon, MedalIcon } from "@/components/icons/Icons.jsx";

export default function FeaturedProduct({
  name,
  description,
  room,
  brand,
  material,
  height,
  width,
  depth,
}) {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-6xl">
      {/* INFORMATION COLUMN */}
      <div>
        {/* MAIN INFO SECTION */}
        <div className="mb-10">
          <span className="text-md font-semibold text-gray-400 uppercase">
            Signature collection
          </span>
          <h3 className="mt-2 mb-5 max-w-lg text-2xl sm:text-4xl font-bold text-gray-800">
            {name}
          </h3>
          <p className="max-w-lg text-base sm:text-lg text-gray-700 font-medium">
            {description}
          </p>
        </div>

        {/* DETAILS SECTION */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-md font-medium text-gray-500 uppercase">
              Room
            </h4>
            <span className="font-medium text-gray-800">{room}</span>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500 uppercase">
              Brand
            </h4>
            <span className="font-medium text-gray-800">{brand}</span>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500 uppercase">
              Material
            </h4>
            <span className="font-medium text-gray-800">{material}</span>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500 uppercase">
              Dimensions
            </h4>
            <span className="font-medium text-gray-800">
              {height} cm x {width} cm x {depth} cm
            </span>
          </div>
        </div>

        {/* BADGES SECTION */}
        <div className="flex items-center space-x-8 my-10">
          <span className="flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-200">
            <MedalIcon className="w-5 h-5 text-gray-800" />
            <span className="font-medium text-gray-800">Design Award 2025</span>
          </span>
          <span className="flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-200">
            <LeafIcon className="w-5 h-5 text-gray-800" />
            <span className="font-medium text-gray-800">Eco-Friendly</span>
          </span>
        </div>

        {/* BUTTONS SECTION */}
        <div className="mt-15">
          <Link
            to="/furniture/productId"
            className="px-6 py-3 space-x-2 rounded-md bg-neutral-900 hover:bg-neutral-800"
          >
            <span className="font-medium text-white">View product details</span>
          </Link>
        </div>
      </div>

      {/* IMAGE COLUMN */}
      <div className="aspect-[4/4]">
        <img
          src={Featured}
          alt="Featured product image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

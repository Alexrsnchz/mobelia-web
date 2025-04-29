import { Link } from "react-router";
import Featured from "@/assets/images/homePage/featured/featuredProduct.webp";
import FeaturedBadges from "@/components/website/homePage/featured/FeaturedBadges.jsx";
import FeaturedDetails from "@/components/website/homePage/featured/FeaturedDetails.jsx";
import FeaturedInformation from "@/components/website/homePage/featured/FeaturedInformation.jsx";

export default function FeaturedProduct({
  name,
  description,
  room,
  brand,
  material,
  height,
  width,
  depth,
  weight,
  warranty,
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 px-0 md:px-4 xl:px-0 mx-auto max-w-xs md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <div className="flex flex-col gap-10 order-2 xl:order-1">
        <div className="flex flex-col md:flex-row xl:flex-col md:items-start gap-10 md:gap-25 xl:gap-10">
          <FeaturedInformation name={name} description={description} />

          <FeaturedDetails
            room={room}
            brand={brand}
            material={material}
            height={height}
            width={width}
            depth={depth}
            weight={weight}
            warranty={warranty}
          />
        </div>

        <FeaturedBadges />

        <div className="mt-5 lg:mt-3">
          <Link
            to="/furniture/productId"
            className="px-6 py-3 rounded-md group border-2 border-stone-600 hover:bg-stone-800 transition-colors duration-200 ease-in-out"
          >
            <span className="font-medium text-stone-800 group-hover:text-white">
              View product details
            </span>
          </Link>
        </div>
      </div>

      {/* IMAGE COLUMN */}
      <div className="mb-8 md:mb-12 xl:mb-0 aspect-[4/4] md:aspect-[3/2] xl:aspect-[4/4] order-1 xl:order-2">
        <img
          src={Featured}
          alt="Featured product image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

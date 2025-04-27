import { Link } from "react-router";
import Featured from "@/assets/images/homePage_misc/featuredProduct.webp";
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
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row xl:flex-col md:items-start gap-10 md:gap-25 xl:gap-10">
          {/* MAIN INFO SECTION */}
          <FeaturedInformation name={name} description={description} />

          {/* DETAILS SECTION */}
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

        {/* BADGES SECTION */}
        <FeaturedBadges />

        {/* BUTTON SECTION */}
        <div className="mt-5 mb-15 lg:mt-3 lg:mb-0">
          <Link
            to="/furniture/productId"
            className="px-6 py-3 space-x-2 rounded-md border-2 border-neutral-800 bg-white-900 hover:bg-neutral-800 hover:text-white transition-colors duration-300"
          >
            <span className="font-medium">View product details</span>
          </Link>
        </div>
      </div>

      {/* IMAGE COLUMN */}
      <div className="aspect-[4/4] md:aspect-[3/2] xl:aspect-[4/4]">
        <img
          src={Featured}
          alt="Featured product image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

import { Link } from "react-router";
import Featured from "@/assets/images/homePage_misc/featuredProduct.webp";
import FeaturedDetails from "@/components/website/homePage/featured/FeaturedDetails.jsx";
import FeaturedBadges from "@/components/website/homePage/featured/FeaturedBadges.jsx";
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
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-xs md:max-w-6xl">
      {/* INFORMATION COLUMN */}
      <div>
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

        {/* BADGES SECTION */}
        <FeaturedBadges />

        {/* BUTTONS SECTION */}
        <div className="my-11">
          <Link
            to="/furniture/productId"
            className="px-6 py-3 space-x-2 rounded-md border-2 border-neutral-800 bg-white-900 hover:bg-neutral-800 hover:text-white"
          >
            <span className="font-medium">View product details</span>
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

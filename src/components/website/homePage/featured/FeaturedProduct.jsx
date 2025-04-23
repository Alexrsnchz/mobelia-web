import { CartIcon } from "@/components/icons/Icons.jsx";
import { Link } from "react-router";
import { ExternalLink } from "lucide-react";

export default function FeaturedProduct({
  category,
  name,
  description,
  height,
  width,
  depth,
  material,
}) {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-7xl w-full h-full">
      <div className="max-w-xl space-y-8">
        <div>
          <span className="text-lg font-semibold text-stone-700">
            Featured product
          </span>
          <h3 className="mt-3 text-4xl font-bold text-stone-700">{name}</h3>
          <p className="mt-5 text-lg font-medium text-stone-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-medium text-gray-800">Room</h4>
            <span className="text-lg font-medium text-gray-700">
              • {category}
            </span>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800">Material</h4>
            <span className="text-lg font-medium text-gray-700">
              • {material}
            </span>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800">Dimensions</h4>
            <span className="text-lg font-medium text-gray-700">
              • {height} cm x {width} cm x {depth} cm
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="flex items-center px-5 py-3 space-x-2 rounded-lg bg-neutral-800">
            <CartIcon className="w-5 h-5 text-white" />
            <span className="font-medium text-white">Add to cart</span>
          </button>
          <Link
            to="/furniture/productId"
            className="flex items-center px-5 py-3 space-x-2 rounded-lg bg-neutral-800"
          >
            <ExternalLink className="w-5 h-5 text-white" />
            <span className="font-medium text-white">View product</span>
          </Link>
        </div>
      </div>
      <div className="py-10">
        <div className="w-full h-full rounded-lg border border-gray-400 bg-gray-300"></div>
      </div>
    </div>
  );
}

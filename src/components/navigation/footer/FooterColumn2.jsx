import { Link } from "react-router";
import {
  BathIcon,
  BedIcon,
  CouchIcon,
  DeskIcon,
  DiningIcon,
  FenceIcon,
  PlantIcon,
} from "@/components/icons/Icons.jsx";

export default function FooterColumn2() {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-950">Shop by Room</h3>
      <div className="flex flex-col pt-4 space-y-3">
        <Link
          to="/furniture/living-room"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <CouchIcon className="w-5.5 h-5.5" />
          <span>Living room</span>
        </Link>
        <Link
          to="/furniture/bedroom"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <BedIcon className="w-5.5 h-5.5" />
          <span>Bedroom</span>
        </Link>
        <Link
          to="/furniture/dining-room"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <DiningIcon className="w-5.5 h-5.5" />
          <span>Dining room</span>
        </Link>
        <Link
          to="/furniture/bathroom"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <BathIcon className="w-5.5 h-5.5" />
          <span>Bathroom</span>
        </Link>
        <Link
          to="/furniture/home-office"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <DeskIcon className="w-5.5 h-5.5" />
          <span>Home office</span>
        </Link>
        <Link
          to="/furniture/outdoor"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <FenceIcon className="w-5.5 h-5.5" />
          <span>Outdoor</span>
        </Link>
        <Link
          to="/furniture/decoration"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <PlantIcon className="w-5.5 h-5.5" />
          <span>Decoration</span>
        </Link>
      </div>
    </div>
  );
}

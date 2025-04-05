import { Link } from "react-router";
import {
  BoxIcon,
  DocumentIcon,
  InterrogationIcon,
  ShieldIcon,
  TruckIcon,
} from "@/components/icons/Icons.jsx";

export default function FooterColumn3() {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-950">Information</h3>
      <div className="flex flex-col pt-4 space-y-3">
        <Link
          to="/help-center"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <InterrogationIcon className="w-5.5 h-5.5" />
          <span>Help center</span>
        </Link>
        <Link
          to="/help-center#shipping-delivery"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <TruckIcon className="w-5.5 h-5.5" />
          <span>Shipping & Delivery</span>
        </Link>
        <Link
          to="/help-center#returns-exchanges"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <BoxIcon className="w-5.5 h-5.5" />
          <span>Returns & Exchanges</span>
        </Link>
        <Link
          to="/help-center#warranty"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <ShieldIcon className="w-5.5 h-5.5" />
          <span>Warranty information</span>
        </Link>
        <Link
          to="/help-center#faq"
          className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
        >
          <DocumentIcon className="w-5.5 h-5.5" />
          <span>FAQ</span>
        </Link>
      </div>
    </div>
  );
}

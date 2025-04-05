import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";
import { Link } from "react-router";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  XIcon,
} from "@/components/icons/Icons.jsx";

export default function FooterColumn1() {
  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-3">
        <img src={MobeliaLogo_badge} alt="Möbelia logo" className="w-22 h-14" />
        <div className="flex flex-col">
          <span className="text-3xl font-bold">Möbelia</span>
          <span className="text-sm font-medium text-gray-800">
            FURNITURE & DECOR
          </span>
        </div>
      </div>
      <div className="">
        <p className="text-gray-700">
          Crafting beautiful furniture for modern living
        </p>
        <p className="text-gray-700">
          since 2010. Our pieces are designed to inspire
        </p>
        <p className="text-gray-700">and built to last.</p>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950">
          Follow us on our socials
        </h3>
        <div className="flex items-center space-x-3">
          <Link
            to="https://facebook.com/"
            className="p-2 rounded-full border-2 border-gray-400"
          >
            <FacebookIcon className="w-5.5 h-5.5 text-gray-700" />
          </Link>
          <Link
            to="https://instagram.com/"
            className="p-2 rounded-full border-2 border-gray-400"
          >
            <InstagramIcon className="w-5.5 h-5.5 text-gray-700" />
          </Link>
          <Link
            to="https://x.com/"
            className="p-2 rounded-full border-2 border-gray-400"
          >
            <XIcon className="w-5.5 h-5.5 text-gray-700" />
          </Link>
          <Link
            to="https://pinterest.com/"
            className="p-2 rounded-full border-2 border-gray-400"
          >
            <PinterestIcon className="w-5.5 h-5.5 text-gray-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}

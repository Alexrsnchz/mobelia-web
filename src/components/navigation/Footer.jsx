import { Link } from "react-router";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  PinterestIcon,
  TruckIcon,
  InterrogationIcon,
  BoxIcon,
  DocumentIcon,
  ShieldIcon,
  LocationIcon,
  PhoneIcon,
  MailIcon,
  CouchIcon,
  BedIcon,
  DiningIcon,
  DeskIcon,
  FenceIcon,
  PlantIcon,
  BathIcon,
} from "@/components/icons/Icons.jsx";
import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-around py-10 border-y-2 border-gray-300">
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <img
              src={MobeliaLogo_badge}
              alt="Möbelia logo"
              className="w-22 h-14"
            />
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
        <div>
          <h3 className="text-lg font-bold text-gray-950">Contact Us</h3>
          <div className="flex flex-col pt-4 space-y-3">
            <div className="flex space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out">
              <LocationIcon className="mt-3 w-5.5 h-5.5" />
              <div className="flex flex-col">
                <span className="font-medium text-neutral-900">
                  Visit our store
                </span>
                <span>Av. Milanesa, 32</span>
                <span>Almería, 04008</span>
                <span>Spain</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out">
              <PhoneIcon className="w-5.5 h-5.5" />
              <div className="flex flex-col">
                <span className="font-medium text-neutral-900">Call Us</span>
                <span>+34 637 42 58 29</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out">
              <MailIcon className="w-5.5 h-5.5" />
              <div className="flex flex-col">
                <span className="font-medium text-neutral-900">Email Us</span>
                <span>support@mobelia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-12 py-7">
        <span className="text-gray-700">
          &copy; 2025 Möbelia. All rights reserved.
        </span>
        <div className="space-x-8">
          <Link
            to="/terms-service"
            className="text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
          >
            Terms of service
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
          >
            Privacy policy
          </Link>
          <Link
            to="/cookies-policy"
            className="text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
          >
            Cookies
          </Link>
        </div>
      </div>
    </div>
  );
}

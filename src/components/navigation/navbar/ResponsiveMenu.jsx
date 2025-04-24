import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.jsx";
import {
  BedIcon,
  CouchIcon,
  DeskIcon,
  DiningIcon,
  FenceIcon,
  MenuIcon,
  PlantIcon,
  SignInIcon,
  SignUpIcon,
} from "@/components/icons/Icons.jsx";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator.jsx";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <button aria-label="Open menu">
          <MenuIcon className="w-4.5 h-4.5 cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent className="px-5 py-10 w-1/2 md:w-1/3">
        <div className="space-y-5">
          <h3 className="text-xl font-bold">Shop by rooms</h3>
          <Link to="#" className="flex items-center space-x-2 font-medium">
            <CouchIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Living room</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 font-medium">
            <BedIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Bedroom</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 font-medium">
            <DiningIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Dining room</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 font-medium">
            <DeskIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Home office</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 font-medium ">
            <FenceIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Outdoor</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 font-medium ">
            <PlantIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Decor</span>
          </Link>
        </div>

        <Separator />

        <div className="space-y-5">
          <h3 className="text-xl font-bold">Account</h3>
          <Link
            to="auth/signin"
            className="flex items-center space-x-2 font-medium"
          >
            <SignInIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Sign in</span>
          </Link>
          <Link
            to="auth/signup"
            className="flex items-center space-x-2 font-medium"
          >
            <SignUpIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Sign up</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

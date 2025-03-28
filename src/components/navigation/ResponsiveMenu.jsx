import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.jsx";
import {
  HeartIcon,
  MenuIcon,
  SignInIcon,
  SignUpIcon,
} from "@/components/icons/Icons.jsx";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator.jsx";

function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="w-4.5 h-4.5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="w-1/2 md:w-1/3 px-5 py-10">
        <div className="space-y-5">
          <h3 className="text-xl font-bold">Shop by rooms</h3>
          <Link to="#" className="flex items-center gap-2 font-medium">
            • <span className="text-gray-700">Living room</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium">
            • <span className="text-gray-700">Bedroom</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium">
            • <span className="text-gray-700">Dining room</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium">
            • <span className="text-gray-700">Home office</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium ">
            • <span className="text-gray-700">Outdoor</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium ">
            • <span className="text-gray-700">Decor</span>
          </Link>
        </div>

        <Separator />

        <div className="space-y-5">
          <h3 className="text-xl font-bold">Account</h3>
          <Link
            to="/favourites"
            className="flex items-center gap-2 font-medium"
          >
            <HeartIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Favourites</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium">
            <SignInIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Sign in</span>
          </Link>
          <Link to="#" className="flex items-center gap-2 font-medium">
            <SignUpIcon className="w-4.5 h-4.5" />
            <span className="text-gray-700">Sign up</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ResponsiveMenu;

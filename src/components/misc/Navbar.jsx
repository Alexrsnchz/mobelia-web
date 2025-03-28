import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  CartIcon,
  HeartIcon,
  SignInIcon,
  SignUpIcon,
  MenuIcon,
  UserIcon,
} from "@/components/icons/Icons.jsx";
import NavbarLink from "@/components/misc/NavbarLink.jsx";
import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";

function Navbar() {
  return (
    <nav className="sticky flex justify-between items-center lg:max-w-7xl lg:mx-auto px-8 md:px-15 py-4 top-0 z-50 bg-white">
      <Link to="/" className="flex items-center gap-2">
        <img src={MobeliaLogo_badge} alt="Möbelia logo" className="w-10 h-6" />
        <span className="text-xl font-bold">Möbelia</span>
      </Link>

      <div className="hidden lg:flex items-center space-x-8">
        <NavbarLink text="Living room" />
        <NavbarLink text="Bedroom" />
        <NavbarLink text="Dining" />
        <NavbarLink text="Office" />
        <NavbarLink text="Outdoor" />
        <NavbarLink text="Decor" />
        <Link to="/sales" className="text-sm font-semibold">
          Sales
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-10">
        <Link to="/favourites">
          <HeartIcon className="w-4.5 h-4.5" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <CartIcon className="w-4.5 h-4.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent></DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserIcon className="w-4.5 h-4.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-4.5 h-4.5 cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="w-1/2 md:w-1/3 px-5 py-10">
            <div className="space-y-5">
              <h3 className="text-xl font-bold">Shop by rooms</h3>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • <span className="text-gray-800">Living room</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • <span className="text-gray-800">Bedroom</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • <span className="text-gray-800">Dining room</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • <span className="text-gray-800">Home office</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium ">
                • <span className="text-gray-800">Outdoor</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium ">
                • <span className="text-gray-800">Decor</span>
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
                <span className="text-gray-800">Favourites</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                <SignInIcon className="w-4.5 h-4.5" />
                <span className="text-gray-800">Sign in</span>
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                <SignUpIcon className="w-4.5 h-4.5" />
                <span className="text-gray-800">Sign up</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;

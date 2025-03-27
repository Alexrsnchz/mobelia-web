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
    <nav className="sticky flex justify-between items-center max-w-7xl mx-auto py-4 top-0 z-50 bg-white">
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
                • Living room
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • Bedroom
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • Dining room
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • Home office
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • Outdoor
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                • Decor
              </Link>
            </div>

            <Separator />

            <div className="space-y-5">
              <h3 className="text-xl font-bold">Account</h3>
              <Link
                to="/favourites"
                className="flex items-center gap-2 font-medium"
              >
                <HeartIcon className="w-4.5 h-4.5" /> Favourites
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                <SignInIcon className="w-4.5 h-4.5" /> Sign in
              </Link>
              <Link to="#" className="flex items-center gap-2 font-medium">
                <SignUpIcon className="w-4.5 h-4.5" /> Sign up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CartIcon, HeartIcon, UserIcon } from "@/components/icons/Icons.jsx";
import NavbarLink from "@/components/navigation/NavbarLink.jsx";
import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";
import ResponsiveMenu from "@/components/navigation/ResponsiveMenu.jsx";

function Navbar() {
  return (
    <nav className="sticky flex justify-between items-center top-0 z-50 max-w-7xl mx-auto px-8 md:px-16 lg:px-0 py-4 bg-white">
      <Link to="/" className="flex items-center gap-2">
        <img src={MobeliaLogo_badge} alt="Möbelia logo" className="w-10 h-6" />
        <span className="text-xl font-bold">Möbelia</span>
      </Link>

      <div className="hidden lg:flex items-center space-x-8">
        <NavbarLink text="Living room" />
        <NavbarLink text="Bedroom" />
        <NavbarLink text="Dining" />
        <NavbarLink text="Bathroom" />
        <NavbarLink text="Office" />
        <NavbarLink text="Outdoor" />
        <NavbarLink text="Decor" />
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
        <ResponsiveMenu />
      </div>
    </nav>
  );
}

export default Navbar;

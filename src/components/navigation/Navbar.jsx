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
import HoverLink from "@/components/navigation/HoverLink.jsx";
import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";
import ResponsiveMenu from "@/components/navigation/ResponsiveMenu.jsx";
import categories from "@/assets/data/NavLinksData.js";

function Navbar() {
  return (
    <nav className="sticky flex justify-between items-center top-0 z-50 max-w-7xl mx-auto px-8 md:px-16 xl:px-24 2xl:px-0 py-4 bg-white">
      <Link to="/" className="flex items-center gap-2">
        <img src={MobeliaLogo_badge} alt="Möbelia logo" className="w-10 h-6" />
        <span className="text-xl font-bold">Möbelia</span>
      </Link>

      <div className="hidden lg:flex items-center space-x-8">
        <HoverLink
          text="Living room"
          category="living-room"
          items={categories.livingRoom}
        />
        <HoverLink
          text="Bedroom"
          category="bedroom"
          items={categories.bedroom}
        />
        <HoverLink
          text="Dining"
          category="dining-room"
          items={categories.diningRoom}
        />
        <HoverLink
          text="Bathroom"
          category="bathroom"
          items={categories.bathroom}
        />
        <HoverLink
          text="Office"
          category="home-office"
          items={categories.homeOffice}
        />
        <HoverLink
          text="Outdoor"
          category="outdoor"
          items={categories.outdoor}
        />
        <HoverLink
          text="Decor"
          category="decoration"
          items={categories.decor}
        />
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

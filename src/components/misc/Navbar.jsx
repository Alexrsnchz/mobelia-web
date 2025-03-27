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
import NavbarLink from "@/components/misc/NavbarLink.jsx";
import Candidate_2 from "@/assets/images/Candidate_2.webp";

function Navbar() {
  return (
    <nav className="sticky flex justify-between items-center px-21 py-4 top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={Candidate_2} alt="Möbelia logo" className="w-10 h-6" />
        {/*<div className="rounded-sm h-8 w-8 bg-gray-600"></div>*/}
        <span className="text-xl font-bold">Möbelia</span>
      </Link>

      <div className="flex items-center space-x-8">
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

      <div className="flex items-center space-x-10">
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
    </nav>
  );
}

export default Navbar;

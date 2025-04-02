import { Link } from "react-router";
import { CartIcon, HeartIcon, UserIcon } from "@/components/icons/Icons.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";

export default function NavControls() {
  return (
    <>
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
    </>
  );
}

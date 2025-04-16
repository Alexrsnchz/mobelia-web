import { Link } from "react-router";
import {
  CartIcon,
  HeartIcon,
  SignInIcon,
  SignUpIcon,
  UserIcon,
} from "@/components/icons/Icons.jsx";
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
          <DropdownMenuItem>
            <Link to="/auth/signin" className="flex items-center space-x-2">
              <SignInIcon className="w-4.5 h-4.5 text-gray-800" />
              <span className="font-medium text-gray-800">Sign in</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/auth/signup" className="flex items-center space-x-2">
              <SignUpIcon className="w-4.5 h-4.5 text-gray-800" />
              <span className="font-medium text-gray-800">Sign up</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

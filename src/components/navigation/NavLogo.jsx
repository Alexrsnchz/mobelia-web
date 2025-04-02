import MobeliaLogo_badge from "@/assets/images/MobeliaLogo_badge.webp";
import { Link } from "react-router";

function NavLogo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={MobeliaLogo_badge} alt="Möbelia logo" className="w-10 h-6" />
      <span className="text-xl font-bold">Möbelia</span>
    </Link>
  );
}

export default NavLogo;

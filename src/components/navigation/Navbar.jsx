import categories from "@/assets/data/NavLinksData.js";
import HoverLink from "@/components/navigation/HoverLink.jsx";
import ResponsiveMenu from "@/components/navigation/ResponsiveMenu.jsx";
import NavLogo from "@/components/navigation/NavLogo.jsx";
import NavControls from "@/components/navigation/NavControls.jsx";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-16 xl:px-24 2xl:px-0 py-4">
        <NavLogo />

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
          <NavControls />
        </div>

        <div className="lg:hidden">
          <ResponsiveMenu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

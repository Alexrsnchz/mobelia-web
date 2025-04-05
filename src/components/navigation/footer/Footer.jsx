import { Link } from "react-router";
import FooterColumn4 from "@/components/navigation/footer/FooterColumn4.jsx";
import FooterColumn3 from "@/components/navigation/footer/FooterColumn3.jsx";
import FooterColumn2 from "@/components/navigation/footer/FooterColumn2.jsx";
import FooterColumn1 from "@/components/navigation/footer/FooterColumn1.jsx";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around border-y-2 py-10 border-gray-300">
        <FooterColumn1 />
        <FooterColumn2 />
        <FooterColumn3 />
        <FooterColumn4 />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-7 gap-7 text-center">
        <span className="text-gray-700">
          &copy; 2025 Möbelia. All rights reserved.
        </span>
        <div className="flex flex-col md:flex-row gap-5 md:gap-8">
          <Link
            to="/terms-service"
            className="text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
          >
            Terms of service
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
          >
            Privacy policy
          </Link>
          <Link
            to="/cookies-policy"
            className="text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out"
          >
            Cookies
          </Link>
        </div>
      </div>
    </div>
  );
}

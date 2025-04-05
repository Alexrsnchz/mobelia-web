import { ChevronDownIcon } from "@/components/icons/Icons.jsx";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator.jsx";

export default function HoverLink({ text, category, items = [] }) {
  return (
    <div className="flex items-center relative space-x-1 group cursor-pointer hover:text-[#a95719]">
      <span className="text-sm font-medium">{text}</span>
      <ChevronDownIcon className="w-4 h-4 mt-1 group-hover:rotate-180 text-gray-500 transition-transform duration-200 ease-in-out" />

      <div className="hidden group-hover:flex flex-col absolute top-full pt-5 w-[200px] rounded-sm bg-white">
        {items.map((item, index) => (
          <Link
            key={index}
            to={"/furniture" + item.route}
            className="px-3 py-3 w-full text-gray-800 hover:text-[#a95719] transition-colors duration-100 ease-in-out"
          >
            {item.text}
          </Link>
        ))}

        <Separator />

        <Link
          to={"/furniture/" + category}
          className="px-3 py-3 w-full font-semibold text-gray-800"
        >
          See all
        </Link>
      </div>
    </div>
  );
}

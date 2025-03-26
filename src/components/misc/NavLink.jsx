import { ChevronDownIcon } from "@/components/icons/Icons.jsx";

function NavLink({ text }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer group">
      <span className="text-sm font-medium">{text}</span>
      <ChevronDownIcon className="w-4 h-4 mt-1 text-gray-500 group-hover:rotate-180 transition-transform duration-200 ease-in-out" />
    </div>
  );
}

export default NavLink;

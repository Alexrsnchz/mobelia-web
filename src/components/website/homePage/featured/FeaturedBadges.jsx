import { LeafIcon, MedalIcon } from "@/components/icons/Icons.jsx";

export default function FeaturedBadges() {
  return (
    <div className="flex flex-col md:flex-row gap-5 my-10">
      <span className="flex items-center space-x-2 px-3 py-1 w-fit rounded-full bg-stone-200">
        <MedalIcon className="w-5 h-5 text-gray-800" />
        <span className="font-medium text-gray-800">Design Award 2025</span>
      </span>
      <span className="flex items-center space-x-2 px-3 py-1 w-fit rounded-full bg-stone-200">
        <LeafIcon className="w-5 h-5 text-gray-800" />
        <span className="font-medium text-gray-800">Eco-Friendly</span>
      </span>
    </div>
  );
}

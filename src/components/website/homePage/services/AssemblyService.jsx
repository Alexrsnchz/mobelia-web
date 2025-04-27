import { ToolsIcon } from "@/components/icons/Icons.jsx";

export default function AssemblyService() {
  return (
    <div className="flex flex-col items-center px-14 py-12 md:px-18 md:py-12 lg:p-12">
      <div className="p-4 rounded-full bg-stone-300">
        <ToolsIcon className="w-7 h-7 text-gray-600" />
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="text-center text-xl font-semibold text-gray-800">
          Assembly Included
        </h3>
        <p className="text-center font-medium text-gray-700">
          Our team will install it for you with 0 hassles.
        </p>
      </div>
    </div>
  );
}

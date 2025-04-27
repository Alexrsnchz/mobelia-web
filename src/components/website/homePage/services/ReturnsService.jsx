import { BoxIcon } from "@/components/icons/Icons.jsx";

export default function ReturnsService() {
  return (
    <div className="flex flex-col items-center px-14 py-12 md:px-18 md:py-12 lg:p-12">
      <div className="p-4 rounded-full bg-stone-300">
        <BoxIcon className="w-7 h-7 text-gray-600" />
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="text-center text-xl font-semibold text-gray-800">
          Easy Returns
        </h3>
        <p className="text-center font-medium text-gray-700">
          7 days return window if you're not satisfied.
        </p>
      </div>
    </div>
  );
}

import {
  BoxIcon,
  ShieldIcon,
  ToolsIcon,
  TruckIcon,
} from "@/components/icons/Icons.jsx";

export default function Services() {
  return (
    <section id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-stone-100">
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
        <div className="flex flex-col items-center px-14 py-12 md:px-18 md:py-12 lg:p-12">
          <div className="p-4 rounded-full bg-stone-300">
            <TruckIcon className="w-7 h-7 text-gray-600" />
          </div>
          <div className="mt-5 space-y-3">
            <h3 className="text-center text-xl font-semibold text-gray-800">
              Fast Delivery
            </h3>
            <p className="text-center font-medium text-gray-700">
              Receive your order safely in 3-5 business days.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-14 py-12 md:px-18 md:py-12 lg:p-12">
          <div className="p-4 rounded-full bg-stone-300">
            <ShieldIcon className="w-7 h-7 text-gray-600" />
          </div>
          <div className="mt-5 space-y-3">
            <h3 className="text-center text-xl font-semibold text-gray-800">
              Extended Warranty
            </h3>
            <p className="text-center font-medium text-gray-700">
              Up to 1 year coverage for all of our products.
            </p>
          </div>
        </div>
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
      </div>
    </section>
  );
}

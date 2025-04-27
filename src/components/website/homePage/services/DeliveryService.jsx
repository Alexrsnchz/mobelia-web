import { TruckIcon } from "@/components/icons/Icons.jsx";

export default function DeliveryService() {
  return (
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
  );
}

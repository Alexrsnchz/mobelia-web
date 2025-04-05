import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons/Icons.jsx";

export default function FooterColumn4() {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-950">Contact Us</h3>
      <div className="flex flex-col pt-4 space-y-3">
        <div className="flex space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out">
          <LocationIcon className="mt-3 w-5.5 h-5.5" />
          <div className="flex flex-col">
            <span className="font-medium text-neutral-900">
              Visit our store
            </span>
            <span>Av. Milanesa, 32</span>
            <span>Almería, 04008</span>
            <span>Spain</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out">
          <PhoneIcon className="w-5.5 h-5.5" />
          <div className="flex flex-col">
            <span className="font-medium text-neutral-900">Call Us</span>
            <span>+34 637 42 58 29</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 hover:text-neutral-950 transition-colors duration-200 ease-in-out">
          <MailIcon className="w-5.5 h-5.5" />
          <div className="flex flex-col">
            <span className="font-medium text-neutral-900">Email Us</span>
            <span>support@mobelia.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

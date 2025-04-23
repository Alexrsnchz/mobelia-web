import { QuoteIcon, StarIcon } from "@/components/icons/Icons.jsx";

export default function TestimonialCard({ name, text, role }) {
  return (
    <div className="p-6 rounded-lg bg-stone-100 border border-stone-200 shadow-md">
      <div className="flex justify-center">
        <QuoteIcon className="w-6 h-6 text-gray-700" />
      </div>
      <p className="my-5 italic text-gray-700">"{text}"</p>
      <div className="border-t border-gray-200 my-5"></div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-gray-600">{role}</span>
        </div>
        <div className="flex flex-row-reverse items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-stone-700 mr-1" />
          ))}
        </div>
      </div>
    </div>
  );
}

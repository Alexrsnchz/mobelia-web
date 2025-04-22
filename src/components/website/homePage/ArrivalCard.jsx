import { HeartFilledIcon } from "@/components/icons/Icons.jsx";

export default function ArrivalCard({ image, category, name, likes, price }) {
  return (
    <div>
      <div className="w-full h-40">
        <img
          src={image}
          alt={name}
          className="rounded-lg h-full w-full object-cover"
        />
      </div>
      <div className="mt-3 space-y-1">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-600">{category}</span>
          <div className="flex items-center space-x-1 md:space-x-2">
            <span className="text-sm font-medium text-gray-800">{likes}</span>
            <HeartFilledIcon className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <h3 className="text-md md:text-lg font-semibold truncate">{name}</h3>
      </div>

      <div className="mt-3">
        <span className="font-medium">{price}€</span>
        <span className="hidden ml-3"></span>
      </div>
    </div>
  );
}

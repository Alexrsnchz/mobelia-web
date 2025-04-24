import { Link } from "react-router";

export default function RoomCard({ name, image, url }) {
  return (
    <Link to={url}>
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src={image}
          alt={`${name} section image`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="flex items-end absolute bottom-0 left-0 px-5 pb-3 w-full h-16 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-md md:text-lg font-semibold text-white">
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
}

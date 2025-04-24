import rooms from "@/assets/data/roomsData.js";
import RoomsCarousel from "@/components/website/homePage/rooms/RoomsCarousel.jsx";

export default function Rooms() {
  return (
    <section id="rooms">
      <div className="px-2 md:px-4 lg:px-6 py-10 md:py-16 lg:py-20 mx-auto max-w-8xl">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
            Shop By Room
          </h3>
          <p className="mt-2 mx-auto max-w-xs md:max-w-lg text-lg md:text-xl text-gray-700 font-medium">
            Find the perfect furniture for every space in your home
          </p>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-15">
          <RoomsCarousel rooms={rooms} />
        </div>
      </div>
    </section>
  );
}

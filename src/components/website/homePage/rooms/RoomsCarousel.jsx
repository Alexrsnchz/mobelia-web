import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RoomCard from "@/components/website/homePage/rooms/RoomCard.jsx";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/Icons.jsx";

export default function RoomsCarousel({ rooms }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full relative">
      <button
        ref={prevRef}
        className="hidden lg:block left-10 top-1/2 -translate-y-1/2 z-10 absolute p-2 rounded-full shadow-lg group bg-white/20 hover:bg-white transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 text-gray-700 group-hover:text-black transition" />
      </button>
      <button
        ref={nextRef}
        className="hidden lg:block right-10 top-1/2 -translate-y-1/2 z-10 absolute p-2 rounded-full shadow-lg group bg-white/20 hover:bg-white transition-colors"
      >
        <ArrowRightIcon className="w-5 h-5 text-gray-700 group-hover:text-black transition" />
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView={2.2}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={false}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 4.2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="px-2 md:px-4 lg:px-6">
              <RoomCard name={room.name} image={room.image} url={room.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

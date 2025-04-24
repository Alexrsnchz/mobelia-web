import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RoomCard from "@/components/website/homePage/rooms/RoomCard.jsx";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/Icons.jsx";

export default function RoomsCarousel({ rooms }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

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

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="px-2 md:px-6">
                <RoomCard name={room.name} image={room.image} url={room.url} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RoomCard from "@/components/website/homePage/rooms/RoomCard.jsx";

export default function RoomsCarousel({ rooms }) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={2}
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
  );
}

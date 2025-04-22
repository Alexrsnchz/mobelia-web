import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrivalCard from "@/components/website/homePage/ArrivalCard.jsx";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/Icons.jsx";

export default function ArrivalsCarousel({ products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative w-full">
      <button
        ref={prevRef}
        className="hidden lg:block left-5 top-1/2 -translate-y-1/2 z-10 absolute p-2 rounded-full shadow-lg group bg-white/20 hover:bg-white transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 text-gray-700 group-hover:text-black transition" />
      </button>
      <button
        ref={nextRef}
        className="hidden lg:block right-5 top-1/2 -translate-y-1/2 z-10 absolute p-2 rounded-full shadow-lg group bg-white/20 hover:bg-white transition-colors"
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
            1280: { slidesPerView: 6 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="px-2">
                <ArrivalCard
                  image={product.url}
                  category={product.category}
                  name={product.name}
                  likes={product.likes}
                  price={product.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

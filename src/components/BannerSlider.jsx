import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  const images = ["https://file-rajshahi.portal.gov.bd/files/www.satbariaup.pabna.gov.bd/page/aafe64b6_247d_4481_a8ab_2c04e3bf86ab/a08db7d4941b4b14e635d9bcb74a84a9.jpg"];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-[300px] md:h-[400px] rounded overflow-hidden"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

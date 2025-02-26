import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import './PlantSlider.css'
import { FreeMode, Navigation } from "swiper/modules";
import PlantCard from "../PlantCard/PlantCard";

const PlantSlider = ({ title, plants }) => {
  return (
    <section>
      <h2>{title}</h2>
      <Swiper
        spaceBetween={450}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        centeredSlides={true}

        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 25 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 35 }, // Reduce to 3 per row
          1280: { slidesPerView: 4, spaceBetween: 40 }, // Limit to 4 per row
          1600: { slidesPerView: 5, spaceBetween: 50 }, // Only go up to 5 per row
        }}
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant.id} className="plant-slide">
            <PlantCard plant={plant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PlantSlider;

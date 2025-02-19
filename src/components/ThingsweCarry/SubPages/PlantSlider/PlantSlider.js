import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // Import navigation styles
import { FreeMode, Navigation } from "swiper/modules";
import PlantCard from "../PlantCard/PlantCard";

const PlantSlider = ({ title, plants }) => {
  return (
    <section>
      <h2>{title}</h2>
      <Swiper
        slidesPerView={2} // Automatically adjust based on container width
        spaceBetween={0} // Space between cards
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
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

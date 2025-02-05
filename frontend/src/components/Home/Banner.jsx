import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
 
import { Autoplay } from "swiper/modules";
import { DataHomeBanner } from "../../data/DataHomeBanner";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper  h-[80vh]  "
    >
      {DataHomeBanner.map((e, i) => (
        <SwiperSlide key={i} className="w-full h-full">
          <img className=" h-full w-full object-cover" src={e.link} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;

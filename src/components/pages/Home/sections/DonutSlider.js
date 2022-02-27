import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import donut1 from "../../../../assets/images/donuts/donut1.png";
import donut2 from "../../../../assets/images/donuts/donut2.png";
import donut3 from "../../../../assets/images/donuts/donut3.png";
import donut4 from "../../../../assets/images/donuts/donut4.png";
import donut5 from "../../../../assets/images/donuts/donut5.png";
import donut6 from "../../../../assets/images/donuts/donut6.png";
import donut7 from "../../../../assets/images/donuts/donut7.png";
import donut8 from "../../../../assets/images/donuts/donut8.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

export const DonutSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={donut1} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut3} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut4} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut5} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut6} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut7} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={donut8} />
      </SwiperSlide>
    </Swiper>
  );
};

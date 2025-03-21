import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full mt-7 h-screen"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen w-full rounded-md flex items-center justify-center"
          >
            <div className="text-center text-black">
              <h2 className="text-5xl">Without hassle</h2>
              <p className="text-xl">Now processing for visa is easy.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen w-full rounded-md flex items-center justify-center"
          >
            <div className="text-center text-black">
              <h2 className="text-5xl">Without hassle</h2>
              <p className="text-xl">Now processing for visa is easy.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen w-full rounded-md flex items-center justify-center"
          >
            <div className="text-center text-black">
              <h2 className="text-5xl">Without hassle</h2>
              <p className="text-xl">Now processing for visa is easy.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

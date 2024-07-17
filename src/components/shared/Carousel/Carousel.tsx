"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "./styles.css";

export default function Carousel() {
  const imageLink =
    "https://images.unsplash.com/photo-1486428128344-5413e434ad35?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imageLink1 =
    "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imageLink2 =
    "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=2524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop
        freeMode
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={800}
        effect="fade"
        className="w-full h-full"
      >
        <SwiperSlide className="relative flex justify-center items-center h-full fade-slide">
          <Image
            src={imageLink}
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-10 left-10 text-white p-5 bg-black bg-opacity-60 rounded-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 z-10">
            <h2 className="text-3xl mb-2 font-bold">Slide Title</h2>
            <p className="mb-4 text-lg">
              This is some dummy text for the slide.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
              Prodavnica
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center h-full fade-slide">
          <Image
            src={imageLink1}
            alt="Slide 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-10 left-10 text-white p-5 bg-black bg-opacity-60 rounded-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 z-10">
            <h2 className="text-3xl mb-2 font-bold">Slide Title</h2>
            <p className="mb-4 text-lg">
              This is some dummy text for the slide.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
              Prodavnica
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center h-full fade-slide">
          <Image
            src={imageLink2}
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-10 left-10 text-white p-5 bg-black bg-opacity-60 rounded-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 z-10">
            <h2 className="text-3xl mb-2 font-bold">Slide Title</h2>
            <p className="mb-4 text-lg">
              This is some dummy text for the slide.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
              Prodavnica
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

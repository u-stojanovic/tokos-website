"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import "./styles.css";

const whiteBackgroundImageLinks = [
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612198791461-e26e3b5dcb86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const darkBackgroundImageLinks = [
  "https://images.unsplash.com/photo-1555813456-94a3dd418cd3?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548865163-afb128596c1e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Carousel() {
  const { theme } = useTheme();
  const [imagesToShow, setImagesToShow] = useState<string[]>([]);

  useEffect(() => {
    if (theme === "dark") {
      setImagesToShow(darkBackgroundImageLinks);
    } else {
      setImagesToShow(whiteBackgroundImageLinks);
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
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
        className="w-full h-full relative"
      >
        {imagesToShow.map((link, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center h-full"
          >
            <Image
              src={link}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 ease-in-out"
            />
          </SwiperSlide>
        ))}
        <div className="absolute bottom-16 left-8 text-white p-6 rounded-xl shadow-sm z-10 transform bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg max-w-xs md:max-w-md lg:max-w-lg">
          <h2 className="text-4xl mb-4 font-bold">
            <span className="relative text-[#FFD0CE] font-raleway text-shadow-lg">
              Slatka kuća Tokos
            </span>
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            S&apos;ljubavlju i iskrenom željom za pravi užitak
          </p>
          <button className="bg-[#FFD0CE] text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-[#FFB0A0] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FFB0A0] focus:ring-opacity-75">
            Prodavnica
          </button>
        </div>
      </Swiper>
    </div>
  );
}

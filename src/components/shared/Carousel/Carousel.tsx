"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FadeText } from "@/components/magicui/fade-text";

const whiteBackgroundImageLinks = [
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612198791461-e26e3b5dcb86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const darkBackgroundImageLinks = [
  "https://images.unsplash.com/photo-1555813456-94a3dd418cd3?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548865163-afb128596c1e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const BLUR_FADE_DELAY = 0.02;
const BLUR_FADE_DELAY_TEXT = 0.25;

export default function Carousel() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="flex items-center justify-center h-screen bg-white">
        <SlideShow />
      </div>
    </BlurFade>
  );
}

function SlideShow() {
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
      <HeadingText />
    </Swiper>
  );
}

function HeadingText() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-8 rounded-xl shadow-lg z-10 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-md max-w-lg text-center">
      <h2 className="text-6xl mb-4 font-bold">
        <div className="relative text-[#FFD0CE] font-raleway text-shadow-md">
          <div className="flex flex-col items-center">
            <BlurFadeText text="Slatka kuća" delay={BLUR_FADE_DELAY_TEXT} />
            <FadeText direction="up" text="Tokos" />
          </div>
        </div>
      </h2>
      <span>
        <BlurFadeText
          className="mb-6 text-2xl leading-relaxed font-poppins"
          delay={BLUR_FADE_DELAY_TEXT}
          text="S'ljubavlju i iskrenom željom za pravi užitak"
        />
      </span>
      <BlurFade delay={BLUR_FADE_DELAY_TEXT}>
        <button className="bg-[#FFD0CE] text-gray-900 px-10 py-4 rounded-full shadow-xl hover:bg-[#FFB0A0] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FFB0A0] focus:ring-opacity-75">
          Prodavnica
        </button>
      </BlurFade>
    </div>
  );
}

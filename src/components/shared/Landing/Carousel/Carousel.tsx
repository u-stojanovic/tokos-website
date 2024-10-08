"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import BlurFade from "@/components/magicui/blur-fade";

const whiteBackgroundImageLinks = [
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713274786226-1cf6efcc5f5b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1500511599662-5441d83fae18?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const darkBackgroundImageLinks = [
  "https://images.unsplash.com/photo-1650134973700-6657a2f6ac4b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662980481668-7da79df5db26?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const BLUR_FADE_DELAY = 0.02;
const BLUR_FADE_DELAY_TEXT = 0.25;

export default function Carousel() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="flex items-center justify-center h-screen bg-lightMode-background dark:bg-darkMode-background">
        <SlideShow />
      </div>
    </BlurFade>
  );
}

function SlideShow() {
  const { theme, resolvedTheme } = useTheme();
  const [imagesToShow, setImagesToShow] = React.useState<string[]>([]);

  React.useEffect(() => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    if (currentTheme === "dark") {
      setImagesToShow(darkBackgroundImageLinks);
    } else {
      setImagesToShow(whiteBackgroundImageLinks);
    }
  }, [theme, resolvedTheme]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      loop
      freeMode
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      speed={1600}
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
            loading="eager"
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
    <div className="absolute top-1/2 md:top-2/3 space-y-6 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-8 rounded-xl z-10 max-w-xs md:max-w-lg text-center">
      <BlurFade delay={BLUR_FADE_DELAY_TEXT} inView>
        <h2 className="text-4xl md:text-6xl mb-4 font-bold [text-shadow:_-1px_3px_7px_rgb(0_0_0_/_50%)]">
          <div className="relative text-lightMode-primary dark:text-darkMode-primary font-raleway text-shadow-md">
            <div className="flex flex-col md:flex-row items-center whitespace-nowrap">
              Slatka kuća Tokos
            </div>
          </div>
        </h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY_TEXT * 2} inView>
        <span className="mb-6 text-2xl md:text-2xl leading-relaxed font-poppins text-white [text-shadow:_-1px_3px_7px_rgb(0_0_0_/_50%)]">
          &quot;S&apos; ljubavlju i iskrenom željom za pravi užitak&quot;
        </span>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY_TEXT * 4}>
        <button className="bg-lightMode-primary text-[#754437] px-8 py-4 md:px-10 md:py-4 rounded-full shadow-xl hover:bg-lightMode-secondary hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FFB0A0] focus:ring-opacity-75">
          Prodavnica
        </button>
      </BlurFade>
    </div>
  );
}

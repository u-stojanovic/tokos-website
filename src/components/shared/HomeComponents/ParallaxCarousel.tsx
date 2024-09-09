"use client";

import { Parallax } from "react-scroll-parallax";
import Carousel from "@/components/shared/Landing/Carousel/Carousel";

export default function ParallaxCarousel() {
  return (
    <Parallax speed={-20} className="relative">
      <Carousel />
    </Parallax>
  );
}

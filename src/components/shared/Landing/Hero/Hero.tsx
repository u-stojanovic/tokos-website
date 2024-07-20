"use client";
import { Parallax } from "react-scroll-parallax";
import Carousel from "./Carousel/Carousel";

export default function Hero() {
  return (
    <Parallax speed={-75}>
      <Carousel />
    </Parallax>
  );
}

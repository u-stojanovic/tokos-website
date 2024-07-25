"use client";

import Banner from "@/components/shared/Banner";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import AboutSection from "./AboutSection";

export default function About() {
  return (
    <div className="flex flex-col">
      <Parallax speed={-20}>
        <Banner
          imageSrc="/enterior.jpg"
          title="O Nama"
          description="Tu smo da ulepšamo Vaš dan"
        />
      </Parallax>
      <div className="relative z-20">
        <AboutSection />
      </div>
    </div>
  );
}

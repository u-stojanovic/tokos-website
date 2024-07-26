"use client";

import Banner from "@/components/shared/Banner";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import AboutSection from "./AboutSection";
import Footer from "@/components/shared/Landing/Footer";

export default function About() {
  return (
    <div className="flex flex-col">
      <Parallax speed={-80}>
        <div className="flex h-screen flex-col">
          <Banner
            imageSrc="/enterior.jpg"
            title="O Nama"
            description="Tu smo da ulepšamo Vaš dan"
          />
        </div>
      </Parallax>
      <Parallax speed={-40}>
        <div className="relative z-20">
          <AboutSection />
        </div>
      </Parallax>
      <Parallax speed={40}>
        <Footer />
      </Parallax>
    </div>
  );
}

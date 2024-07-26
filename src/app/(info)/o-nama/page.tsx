"use client";

import Banner from "@/components/shared/Banner";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import AboutSection from "./AboutSection";
import Footer from "@/components/shared/Landing/Footer";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.02;
export default function About() {
  return (
    <div className="flex flex-col">
      <Parallax speed={-80}>
        <div className="flex h-screen flex-col">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Banner
              imageSrc="/enterior.jpg"
              title="O Nama"
              description="Tu smo da ulepšamo Vaš dan"
            />
          </BlurFade>
        </div>
      </Parallax>
      <Parallax speed={-40}>
        <div className="relative z-20">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <AboutSection />
          </BlurFade>
        </div>
      </Parallax>
      <Parallax speed={40}>
        <Footer />
      </Parallax>
    </div>
  );
}

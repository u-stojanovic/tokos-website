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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Parallax speed={-55}>
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
        <Parallax speed={-45}>
          <div className="relative z-50">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <AboutSection />
            </BlurFade>
          </div>
        </Parallax>
      </div>
      <div className="flex flex-1 mt-auto">
        <Parallax speed={20}>
          <Footer />
        </Parallax>
      </div>
    </div>
  );
}

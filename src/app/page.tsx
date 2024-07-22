"use client";

import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Landing/Hero/Hero";
import { Parallax } from "react-scroll-parallax";
import ShopInfoSection from "@/components/shared/Landing/Main/ShopInfoSection";
import CategoriesInfoSection from "@/components/shared/Landing/Main/CategoriesSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Parallax speed={-20} className="relative">
          <Hero />
        </Parallax>
        <div className="relative z-20">
          <ShopInfoSection />
        </div>
        <Parallax speed={-20}>
          <div className="h-screen flex items-start">
            <CategoriesInfoSection />
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Home;

"use client";
import Hero from "@/components/shared/Landing/Hero/Hero";
import { Parallax } from "react-scroll-parallax";
import ShopInfoSection from "@/components/shared/Landing/Main/ShopInfoSection";
import CategoriesInfoSection from "@/components/shared/Landing/Main/CategoriesSection";
import Footer from "@/components/shared/Landing/Footer/Footer";
import Navbar from "@/components/shared/Navbar";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Parallax speed={-20} className="relative">
          <Hero />
        </Parallax>
        <div className="relative z-20 bg-white">
          <ShopInfoSection />
        </div>
        <Parallax speed={-20}>
          <div className="h-screen flex items-start">
            <CategoriesInfoSection />
          </div>
        </Parallax>
      </div>
      <Parallax speed={-5}>
        <Footer />
      </Parallax>
    </div>
  );
};

export default Home;

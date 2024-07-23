"use client";
import Hero from "@/components/shared/Landing/Hero/Hero";
import { Parallax } from "react-scroll-parallax";
import ShopInfoSection from "@/components/shared/Landing/Main/ShopInfoSection";
import CategoriesInfoSection from "@/components/shared/Landing/Main/CategoriesSection";
import Footer from "@/components/shared/Landing/Footer/Footer";
import Navbar from "@/components/shared/Navbar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Parallax speed={-20} className="relative">
          <Hero />
        </Parallax>
        <div className="relative z-20">
          <ShopInfoSection />
        </div>
        <Parallax speed={-7}>
          <div className="flex items-start">
            <CategoriesInfoSection />
          </div>
        </Parallax>
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

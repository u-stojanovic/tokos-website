"use client";
import { Parallax } from "react-scroll-parallax";
import ShopInfoSection from "@/components/shared/Landing/Sections/ShopInfoSection";
import CategoriesInfoSection from "@/components/shared/Landing/Sections/CategoriesSection";
import Footer from "@/components/shared/Landing/Footer";
import Navbar from "@/components/shared/Navbar";
import Carousel from "@/components/shared/Landing/Carousel/Carousel";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Parallax speed={-20} className="relative">
          <Carousel />
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

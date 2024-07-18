"use client";
import Carousel from "@/components/shared/Carousel/Carousel";
import Test from "@/components/ParallTest";
import { Parallax } from "react-scroll-parallax";
import Navbar from "@/components/shared/Navbar";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Parallax speed={-50}>
        <Carousel />
      </Parallax>
      <Parallax>
        <Test />
      </Parallax>
    </div>
  );
};

export default Home;

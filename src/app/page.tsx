"use client";
import Carousel from "@/components/shared/Carousel/Carousel";
import Test from "@/components/Paral";
import { ParallaxBanner } from "react-scroll-parallax";
import Navbar from "@/components/shared/Navbar";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-y-scroll">
      <Navbar />
      <ParallaxBanner
        layers={[
          {
            children: (
              <div className="relative w-full h-screen bg-gray-900">
                <Carousel />
              </div>
            ),
          },
        ]}
        className="h-screen"
      />

      <ParallaxBanner
        layers={[
          {
            children: (
              <div className="relative w-full h-screen bg-red-500">
                <Test />
              </div>
            ),
          },
        ]}
        className="h-screen"
      />
    </div>
  );
};

export default Home;

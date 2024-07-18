"use client";
import Carousel from "@/components/shared/Carousel/Carousel";
import Test from "@/components/ParallTest";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Navbar from "@/components/shared/Navbar";

const Home: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="relative">
        <Navbar />
        <Parallax speed={10}>
          <div className="relative">
            <Carousel />
          </div>
        </Parallax>
        {/* <Parallax speed={-10}> */}
        {/*   <Test /> */}
        {/* </Parallax> */}
      </div>
    </ParallaxProvider>
  );
};

export default Home;

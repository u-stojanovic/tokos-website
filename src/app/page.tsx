"use client";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Landing/Hero/Hero";
import Main from "@/components/shared/Landing/Main/Main";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
};

export default Home;

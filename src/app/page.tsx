import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Landing/Hero/Hero";
import Main from "@/components/shared/Landing/Main/Main";
import Footer from "@/components/shared/Landing/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

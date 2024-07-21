import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Landing/Hero/Hero";
import Main from "@/components/shared/Landing/Main/Main";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Main />
      </div>
    </div>
  );
};

export default Home;

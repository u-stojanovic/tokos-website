import ParallaxCarousel from "@/components/shared/HomeComponents/ParallaxCarousel";
import ParallaxCategories from "@/components/shared/HomeComponents/ParallaxCategories";
import Footer from "@/components/shared/Landing/Footer";
import ShopInfoSection from "@/components/shared/Landing/Sections/ShopInfoSection";
import Navbar from "@/components/shared/Navbar";
import { getAllProducts } from "@/lib/actions/productActions";
import { QueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["svi-proizvodi", 1],
    queryFn: ({ queryKey }) => getAllProducts(queryKey[1] as number),
  });

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ParallaxCarousel />
        <div className="relative z-20">
          <ShopInfoSection />
        </div>
        <ParallaxCategories />
      </div>
      <div className="relative z-50 h-fit">
        <Footer />
      </div>
    </div>
  );
}

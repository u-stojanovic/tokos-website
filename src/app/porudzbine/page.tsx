import Footer from "@/components/shared/Landing/Footer";
import Navbar from "@/components/shared/Navbar";
import Form from "./form";
import OrderSummary from "./summary";

export default function Porudzbine() {
  return (
    <div className="flex flex-col min-h-screen bg-lightMode-surface dark:bg-darkMode-surface">
      <header className="fixed w-full z-50">
        <Navbar />
      </header>
      <main className="flex gap-10 justify-center items-center flex-grow mt-36">
        <Form />
        <OrderSummary />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

"use client";

import Footer from "@/components/shared/Landing/Footer";
import Navbar from "@/components/shared/Navbar";
import Form from "./form";
import OrderSummary from "./summary";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Porudzbine() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col min-h-screen bg-lightMode-surface dark:bg-darkMode-surface">
        <header className="fixed w-full z-50">
          <Navbar />
        </header>
        <main className="flex flex-col justify-cent lg:flex-row gap-10 justify-center items-center flex-grow mt-36 px-4 lg:px-20 max-w-[1440px] mx-auto">
          <div className="w-full lg:w-[70%]">
            <Form />
          </div>
          <div className="w-full lg:w-[70%]">
            <OrderSummary />
          </div>
        </main>
        <footer className="mt-8 lg:mt-0">
          <Footer />
        </footer>
      </div>
    </LocalizationProvider>
  );
}

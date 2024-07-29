import Footer from "@/components/shared/Landing/Footer";
import Navbar from "@/components/shared/Navbar";

export default function InfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col bg-lightMode-surface dark:bg-darkMode-surface min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

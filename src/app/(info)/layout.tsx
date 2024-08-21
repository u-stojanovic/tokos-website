import Footer from "@/components/shared/Landing/Footer";
import Navbar from "@/components/shared/Navbar";

export default function InfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen bg-lightMode-surface dark:bg-darkMode-surface">
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main>
      <div className="relative z-50 h-fit">
        <Footer />
      </div>
    </div>
  );
}

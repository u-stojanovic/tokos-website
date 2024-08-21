import ProductFooter from "@/components/shared/Products/ui/footer";
import ProductsNavbar from "@/components/shared/Products/ui/navbar";

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen bg-lightMode-surface dark:bg-darkMode-surface">
      <header className="fixed w-full z-50">
        <ProductsNavbar />
      </header>
      <main className="flex-grow mt-36">{children}</main>
      <footer>
        <ProductFooter />
      </footer>
    </div>
  );
}

import ProductFooter from "@/components/shared/Products/ui/footer";
import ProductsNavbar from "@/components/shared/Products/ui/navbar";
export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col bg-lightMode-surface dark:bg-darkMode-surface min-h-screen">
      <ProductsNavbar />
      <main className="flex-grow">{children}</main>
      <ProductFooter />
    </div>
  );
}

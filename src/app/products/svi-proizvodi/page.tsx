import { getAllProducts } from "@/lib/actions/getProducts";
import ListProducts from "@/components/shared/Products/ListProducts";

export default async function AllProducts() {
  const products = await getAllProducts();

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center py-6">
      <div className="p-4">
        <h1 className="text-lightMode-text dark:text-darkMode-text text-4xl font-raleway py-8">
          Svi Proizvodi
        </h1>
      </div>
      <div className="flex flex-col items-left gap-4">
        <ListProducts products={products} />
      </div>
    </div>
  );
}

import { getAllProducts } from "@/lib/actions/getProducts";
import ListProducts from "@/components/shared/Products/ListProducts";

export default async function AllProducts() {
  const products = await getAllProducts();

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex flex-col items-left gap-4">
        <ListProducts products={products} />
      </div>
    </div>
  );
}

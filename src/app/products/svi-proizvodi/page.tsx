import { getAllProducts } from "@/lib/actions/getProducts";
import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";

export default async function AllProducts() {
  const products = await getAllProducts();

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex flex-col items-left gap-4">
        <ProductsTitle title="Svi Proizvodi" />
        <ListProducts products={products} />
      </div>
    </div>
  );
}

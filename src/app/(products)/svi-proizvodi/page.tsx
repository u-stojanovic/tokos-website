import { getAllProducts } from "@/lib/actions/getProducts";
import ListAllProducts from "@/components/shared/Products/AllProducts";

export default async function AllProducts() {
  const products = await getAllProducts();

  // console.log("products: ", products);

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-2xl font-raleway p-6">All Products</h1>
      <ListAllProducts products={products} />
    </div>
  );
}

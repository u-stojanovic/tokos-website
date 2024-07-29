import getAllProducts from "@/lib/actions/getProducts";
import ListAllProducts from "@/components/shared/Products/AllProducts";

export default async function AllProducts() {
  const products = await getAllProducts();

  // console.log("products: ", products);

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      <ListAllProducts products={products} />
    </div>
  );
}

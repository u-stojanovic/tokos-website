import { getProductsByCategory } from "@/lib/actions/getProducts";
import ListProducts from "@/components/shared/Products/ListProducts";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  const products = await getProductsByCategory(category);

  console.log("products: ", products);

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 gap-4">
      <div className="inline-block rounded-lg bg-lightMode-primary px-3 py-1 text-sm dark:bg-darkMode-primary text-lightMode-text">
        {category}
      </div>
      <ListProducts products={products} />
    </div>
  );
}

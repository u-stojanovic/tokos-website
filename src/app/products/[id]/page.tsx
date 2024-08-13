import { getProductById } from "@/lib/actions/getProducts";
import ProductPage from "@/components/shared/Products/IndividualProduct";

export default async function Slug({ params }: { params: { id: number } }) {
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="text-3xl font-bold text-lightMode-text dark:text-darkMode-text mb-6">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <ProductPage product={product} />
    </div>
  );
}

import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { getAllProductsConfig } from "@/lib/hooks/products/useGetProducts";
import { QueryClient } from "@tanstack/react-query";

export default async function AllProducts() {
  const queryClient = new QueryClient();

  const { queryKey, queryFn } = getAllProductsConfig();
  await queryClient.prefetchQuery({ queryKey, queryFn });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title="Svi Proizvodi" />
        <ListProducts />
      </div>
    </div>
  );
}

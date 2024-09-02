import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { getAllProductsConfig } from "@/lib/hooks/products/useGetProducts";
import { QueryClient } from "@tanstack/react-query";

export default async function AllProducts({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const queryClient = new QueryClient();

  const page = parseInt(searchParams.page || "1");

  const { queryKey, queryFn } = getAllProductsConfig(page);
  await queryClient.prefetchQuery({ queryKey, queryFn });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title="Svi Proizvodi" />
        <ListProducts page={page} />
      </div>
    </div>
  );
}

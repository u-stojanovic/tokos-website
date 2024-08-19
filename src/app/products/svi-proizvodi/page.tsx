import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { useGetAllProducts } from "@/lib/hooks/products/useGetProducts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function AllProducts() {
  const queryClient = new QueryClient();
  const { queryKey, queryFn } = useGetAllProducts();

  await queryClient.prefetchQuery({ queryKey, queryFn });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title="Svi Proizvodi" />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ListProducts />
        </HydrationBoundary>
      </div>
    </div>
  );
}

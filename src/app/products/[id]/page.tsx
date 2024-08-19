import ProductPage from "@/components/shared/Products/IndividualProduct";
import { getProductById } from "@/lib/actions/productActions";
import { getProductByIdConfig } from "@/lib/hooks/products/useGetProductById";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default async function Slug({ params }: { params: { id: number } }) {
  const { queryKey, queryFn } = getProductByIdConfig(params.id);
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <HydrationBoundary>
        <ProductPage id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

import ProductPage from "@/components/shared/Products/IndividualProduct";
import { useGetProductById } from "@/lib/hooks/products/useGetProductById";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Slug({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient();
  const { queryKey, queryFn } = useGetProductById(params.id);

  await queryClient.prefetchQuery({ queryKey, queryFn });

  return (
    <div className="flex flex-col items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductPage id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

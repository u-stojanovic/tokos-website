import ProductPage from "@/components/shared/Products/IndividualProduct";
import { HydrationBoundary } from "@tanstack/react-query";

export default async function Slug({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <HydrationBoundary>
        <ProductPage id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

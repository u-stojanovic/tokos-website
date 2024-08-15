import ProductPage from "@/components/shared/Products/IndividualProduct";
import { HydrationBoundary } from "@tanstack/react-query";

export default function Slug({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <HydrationBoundary>
        <ProductPage id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

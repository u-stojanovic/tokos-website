import ListingProductsSkeletonLoader from "@/components/shared/Products/ListingProductsSkeletonLoader";
import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { Suspense } from "react";

export default async function AllProducts({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1");

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title="Svi Proizvodi" />
        <Suspense fallback={<ListingProductsSkeletonLoader />}>
          <ListProducts page={page} />
        </Suspense>
      </div>
    </div>
  );
}

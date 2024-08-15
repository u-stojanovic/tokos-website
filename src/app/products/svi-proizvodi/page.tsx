import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AllProducts() {
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

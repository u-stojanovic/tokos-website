import ListCategoryProducts from "@/components/shared/Products/ListCategoriesProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { getProductsyCategoryConfig } from "@/lib/hooks/products/useProductsByCategoryQuery";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const queryClient = new QueryClient();

  const transformCategoryName = (category: string) => {
    switch (category) {
      case "kolaci":
        return "Kolači";
      case "slani-ketering":
        return "Slani Ketering";
      case "torte":
        return "Torte";
      case "poslastice":
        return "Poslastice";
      default:
        return category;
    }
  };

  const { queryKey, queryFn } = getProductsyCategoryConfig(params.category);

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title={transformCategoryName(category)} />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ListCategoryProducts category={category} />
        </HydrationBoundary>
      </div>
    </div>
  );
}

import ListCategoryProducts from "@/components/shared/Products/ListCategoriesProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
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

const queryClient = new QueryClient();

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

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

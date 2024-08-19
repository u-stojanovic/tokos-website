import { getProductsByCategory } from "@/lib/actions/productActions";

export const useProductsByCategoryQuery = (category: string) => {
  const queryKey = ["productsCategories", category];

  const queryFn = async ({ queryKey }: { queryKey: string[] }) => {
    return await getProductsByCategory(queryKey[1]);
  };

  return {
    queryKey,
    queryFn,
  };
};

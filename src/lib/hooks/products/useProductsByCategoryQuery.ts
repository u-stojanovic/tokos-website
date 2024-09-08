import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../actions/productActions";

export const useFetchProductsFromCategories = (category: string) => {
  return useQuery({
    queryKey: ["productsCategories", category],
    queryFn: ({ queryKey }: any) =>
      getProductsByCategory(queryKey[1] as string),
  });
};

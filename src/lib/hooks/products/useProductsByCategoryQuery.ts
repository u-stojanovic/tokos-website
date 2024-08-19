import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../actions/productActions";

export const useFetchProductsFromCategories = (category: string) => {
  return useQuery({
    queryKey: ["productsCategories", category],
    queryFn: ({ queryKey }) => getProductsByCategory(queryKey[1]),
  });
};

export const getProductsyCategoryConfig = (category: string) => {
  const queryKey: [string, string] = ["productsCategories", category];

  const queryFn = async ({ queryKey }: { queryKey: [string, string] }) => {
    return await getProductsByCategory(queryKey[1]);
  };

  return {
    queryKey,
    queryFn,
  };
};

import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../actions/productActions";

const fetchProductsFromCategory = async (category: string) => {
  const products = await getProductsByCategory(category);
  return products;
};

export const useFetchProductsFromCategories = (category: string) => {
  return useQuery({
    queryKey: ["productsCategories", category],
    queryFn: ({ queryKey }) => fetchProductsFromCategory(queryKey[1]),
  });
};

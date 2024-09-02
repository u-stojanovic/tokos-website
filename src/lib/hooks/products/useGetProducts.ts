import { getAllProducts } from "@/lib/actions/productActions";
import { useQuery } from "@tanstack/react-query";

export const getAllProductsConfig = (page: number) => {
  const queryKey = ["all-products", page];

  const queryFn = async () => {
    return await getAllProducts(page);
  };

  return {
    queryKey,
    queryFn,
  };
};

export const useGetAllProducts = (page: number) => {
  const { queryKey, queryFn } = getAllProductsConfig(page);

  return useQuery({
    queryKey,
    queryFn,
  });
};

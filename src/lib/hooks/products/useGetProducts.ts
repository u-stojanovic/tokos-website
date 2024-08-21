import { getAllProducts } from "@/lib/actions/productActions";
import { useQuery } from "@tanstack/react-query";

export const getAllProductsConfig = () => {
  const queryKey: [string] = ["all-products"];

  const queryFn = async () => {
    return await getAllProducts();
  };

  return {
    queryKey,
    queryFn,
  };
};

export const useGetAllProducts = () => {
  const { queryKey, queryFn } = getAllProductsConfig();

  return useQuery({
    queryKey,
    queryFn,
  });
};

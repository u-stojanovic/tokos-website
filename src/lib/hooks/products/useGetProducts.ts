import { getAllProducts } from "@/lib/actions/productActions";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = (page: number) => {
  return useQuery({
    queryKey: ["all-products", page],
    queryFn: ({ queryKey }) => getAllProducts(queryKey[1] as number),
  });
};

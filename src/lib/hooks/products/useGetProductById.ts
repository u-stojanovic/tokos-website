import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../actions/productActions";

export const useFetchProductById = (id: number) => {
  return useQuery({
    queryKey: ["getProductById", id],
    queryFn: ({ queryKey }) => getProductById(queryKey[1] as number),
  });
};

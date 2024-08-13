import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../actions/productActions";

const fetchProduct = async (id: number) => {
  const product = await getProductById(id);
  return product;
};

export const useFetchProductById = (id: number) => {
  return useQuery({
    queryKey: ["getProductById", id],
    queryFn: ({ queryKey }) => fetchProduct(queryKey[1] as number),
  });
};

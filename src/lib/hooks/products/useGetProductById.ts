import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/actions/productActions";

export const useGetProductById = (id: number) => {
  const queryKey: [string, string] = ["getProductById", id.toString()];

  const queryFn = async ({ queryKey }: { queryKey: string[] }) => {
    return await getProductById(Number(queryKey[1]));
  };

  return { queryKey, queryFn };
};

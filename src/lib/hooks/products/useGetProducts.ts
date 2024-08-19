import { getAllProducts } from "@/lib/actions/productActions";

export const useGetAllProducts = () => {
  const queryKey = ["all-products"];

  const queryFn = async () => {
    return await getAllProducts();
  };

  return {
    queryKey,
    queryFn,
  };
};

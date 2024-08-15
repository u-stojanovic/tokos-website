import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../actions/productActions";

const fetchProducts = async () => {
  const products = await getAllProducts();
  return products;
};

export const useFetchProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};

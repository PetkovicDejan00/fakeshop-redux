import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFilterByCategory = (category: string | undefined) => {
  const filterProducts = () => {
    return axios.get(`https://fakestoreapi.com/products/category/${category}`);
  };

  return useQuery({
    queryKey: ["filter", category],
    queryFn: filterProducts,
    enabled: !!category,
  });
};

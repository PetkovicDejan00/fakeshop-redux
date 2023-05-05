import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getProducts = () => {
  return axios.get(`https://fakestoreapi.com/products/`);
};

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

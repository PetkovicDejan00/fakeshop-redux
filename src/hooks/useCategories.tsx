import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

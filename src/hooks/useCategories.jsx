import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
    const fetchCategories = () => {
        return axios.get('https://fakestoreapi.com/products/categories')
    }

    return useQuery(['categories'], fetchCategories)
}
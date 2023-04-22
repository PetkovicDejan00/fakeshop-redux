import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllProducts = () => {
    const getProducts = () => {
        return axios.get(`https://fakestoreapi.com/products/`)
    }
    return useQuery(['all-products'], getProducts)
}
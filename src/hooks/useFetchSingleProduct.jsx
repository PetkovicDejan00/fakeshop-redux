import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchSingleProduct = (id) => {
    
    const getSingleProduct = () => {
        return axios.get(`https://fakestoreapi.com/products/${id}`)
    }

    return useQuery({
        queryKey: [`product-${id}`],
        queryFn: getSingleProduct
    })
}
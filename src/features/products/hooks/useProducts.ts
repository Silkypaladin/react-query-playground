import {useQuery} from "react-query";
import {ProductsResponse} from "../data/products-response.ts";
import {getProducts} from "../api/getProducts.ts";

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ['products'],
    queryFn: getProducts
  });
}

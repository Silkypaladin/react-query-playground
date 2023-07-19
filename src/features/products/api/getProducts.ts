import {axios} from "../../../lib/axios.ts";
import {ProductsResponse} from "../data/products-response.ts";

export const getProducts = (): Promise<ProductsResponse> => {
  return axios.get('/api/v1/products');
}

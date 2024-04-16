import {axios} from "../../../lib/axios.ts";
import {ProductResponse} from "../data/product-response.ts";

export const getSingleProduct = (productId: string): Promise<ProductResponse> => {
  return axios.get(`/api/v1/products/${productId}`);
}

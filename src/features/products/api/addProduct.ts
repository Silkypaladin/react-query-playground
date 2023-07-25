import {AddProductResponse} from "../data/add-product-response.ts";
import {axios} from "../../../lib/axios.ts";

export interface ProductPayload {
  name: string;
  price: number;
  image: string;
  description: string;
  company: string;
  category: string;
}


export const addProduct = (payload: ProductPayload): Promise<AddProductResponse> => {
  return axios.post('/api/v1/products', payload);
}

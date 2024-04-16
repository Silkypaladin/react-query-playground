import {ProductResponse} from "../data/product-response.ts";
import {axios} from "../../../lib/axios.ts";

export interface EditProductPayload {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  company: string;
  _id: string;
}

export const editProduct = (payload: EditProductPayload): Promise<ProductResponse> => {
  return axios.patch(`/api/v1/products/${payload._id}`, payload);
}

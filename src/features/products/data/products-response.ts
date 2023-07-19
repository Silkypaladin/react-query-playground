import {Product} from "./product.ts";

export interface ProductsResponse {
  count: number;
  products: Product[];
}
import {useQuery} from "react-query";
import {ProductResponse} from "../data/product-response.ts";
import {getSingleProduct} from "../api/getSingleProduct.ts";

export const useSingleProduct = (productId: string) => {
  return useQuery<ProductResponse>({
    queryKey: ['products', productId],
    queryFn: () => getSingleProduct(productId)
  });
}

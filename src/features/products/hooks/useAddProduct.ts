import {useMutation} from "react-query";
import {addProduct} from "../api/addProduct.ts";
import {queryClient} from "../../../lib/react-query.ts";
import {notifySuccess} from "../../../lib/hot-toast.ts";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: addProduct,
    onSuccess: async () => {
      await queryClient.invalidateQueries('products');
      notifySuccess('Product Successfully added!');
    }
  })
}
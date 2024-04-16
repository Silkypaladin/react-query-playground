import {useMutation} from "react-query";
import {editProduct} from "../api/editProduct.ts";
import {queryClient} from "../../../lib/react-query.ts";
import {notifyError, notifySuccess} from "../../../lib/hot-toast.ts";
import {ProductResponse} from "../data/product-response.ts";

export const useEditProduct = () => {
  return useMutation({
    mutationFn: editProduct,
    onMutate: async (editedProduct) => {
      await queryClient.cancelQueries(['todos', editedProduct._id]);

      const previousProduct = queryClient.getQueryData<ProductResponse>(['products', editedProduct._id]);

      queryClient.setQueryData(['products', editedProduct._id], { product: { ...previousProduct, ...editedProduct }});
      return { previousProduct, editedProduct };
    },
    onError: (_, __, context) => {
      if (context?.previousProduct) {
        queryClient.setQueryData(
          ['products', context?.editedProduct._id],
          context.previousProduct
        );
        notifyError("Failed to update selected product.");
      }
    },
    onSuccess: () => {
      notifySuccess('Product Successfully edited!');
    },
    onSettled: async (editedProduct) => {
      await queryClient.invalidateQueries(['products', editedProduct?.product._id])
    },
  })
}
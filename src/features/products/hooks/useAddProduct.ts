import {useMutation} from "react-query";
import {addProduct} from "../api/addProduct.ts";
import {queryClient} from "../../../lib/react-query.ts";
import {notifySuccess} from "../../../lib/hot-toast.ts";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: addProduct,
    // Is it okay to generate a temp id for an optimistic update???? Who knows
    // onMutate: async (newProduct) => {
    //   await queryClient.cancelQueries('products');
    //
    //   const previousProducts = queryClient.getQueryData<ProductsResponse>('products');
    //
    //   const productToAdd = {...newProduct, }
    //
    //   queryClient.setQueryData('products',  { products: [...(previousProducts?.products || []), newProduct] });
    //
    //   return { previousProducts };
    // },
    // onError: (_, __, context) => {
    //   if (context?.previousProducts) {
    //     queryClient.setQueryData('products', { products: context.previousProducts });
    //   }
    // },
    onSuccess: async () => {
      await queryClient.invalidateQueries('products');
      notifySuccess('Product Successfully added!');
    }
  })
}
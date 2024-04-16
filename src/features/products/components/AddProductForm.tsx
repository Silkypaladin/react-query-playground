import {useAddProduct} from "../hooks/useAddProduct.ts";
import {ProductFormSchema} from "./product-form-schema.ts";
import ProductForm from "./ProductForm.tsx";

interface AddProductFormProps {
  onSuccess: () => void;
}

const DEFAULT_FORM_STATE = {
  name: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  company: ''
};

export const AddProductForm = ({ onSuccess }: AddProductFormProps) => {
  const mutation = useAddProduct();

  const onSubmit = (data: ProductFormSchema) => {
    mutation.mutate(data, {
      onSuccess: () => onSuccess()
    });
  }

  return <ProductForm onSubmitFn={onSubmit} defaultFormState={DEFAULT_FORM_STATE} isLoading={mutation.isLoading}/>
}
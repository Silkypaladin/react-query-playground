import {ProductFormSchema} from "./product-form-schema.ts";
import ProductForm from "./ProductForm.tsx";
import {useEditProduct} from "../hooks/useEditProduct.ts";

interface EditProductFormProps {
  onSuccess: () => void;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  company: string;
  _id: string;
}

export const EditProductForm = ({ onSuccess, name, price, description, image, category, company, _id }: EditProductFormProps) => {
  const defaultFormState = { name, price, description, image, company, category };
  const mutation = useEditProduct();

  const onSubmit = (data: ProductFormSchema) => {
    mutation.mutate({ ...data, _id }, {
      onSuccess: () => {
        onSuccess()
      }
    });
  }

  return <ProductForm onSubmitFn={onSubmit} defaultFormState={defaultFormState} isLoading={mutation.isLoading} />
}

import {useForm} from "react-hook-form";
import {AddProductFormSchema, addProductSchema} from "./add-product-schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack, Textarea
} from "@chakra-ui/react";
import {CATEGORIES, COMPANIES} from "../data/add-product-constants.ts";
import {useAddProduct} from "../hooks/useAddProduct.ts";

interface AddProductProps {
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

const AddProductForm = ({onSuccess}: AddProductProps) => {
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
    reset
  } = useForm<AddProductFormSchema>({
    defaultValues: DEFAULT_FORM_STATE,
    resolver: zodResolver(addProductSchema)
  });
  const mutation = useAddProduct();

  const onSubmit = (data: AddProductFormSchema) => {
    reset(DEFAULT_FORM_STATE);
    mutation.mutate(data, {
      onSuccess: () => onSuccess()
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            placeholder='Name'
            {...register('name')}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.price} isRequired>
          <FormLabel htmlFor='price'>Price</FormLabel>
          <Input
            id='price'
            placeholder='Price'
            {...register('price')}
          />
          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description} isRequired>
          <FormLabel htmlFor='description'>Description</FormLabel>
          <Textarea
            id='description'
            placeholder='Description'
            resize='none'
            {...register('description')}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.image} isRequired>
          <FormLabel htmlFor='image'>Image URL</FormLabel>
          <Input
            id='image'
            placeholder='Image'
            {...register('image')}
          />
          <FormErrorMessage>
            {errors.image && errors.image.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.category} isRequired>
          <FormLabel htmlFor='category'>Category</FormLabel>
          <Select id='category' {...register('category')}>
            {CATEGORIES.map(category => <option key={category.value} value={category.value}>{category.label}</option>)}
          </Select>
          <FormErrorMessage>
            {errors.category && errors.category.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.company} isRequired>
          <FormLabel htmlFor='category'>Company</FormLabel>
          <Select id='company' {...register('company')}>
            {COMPANIES.map(company => <option key={company.value} value={company.value}>{company.label}</option>)}
          </Select>
          <FormErrorMessage>
            {errors.company && errors.company.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting || mutation.isLoading} type='submit'>
        Add new product
      </Button>
    </form>
  )
}

export default AddProductForm;

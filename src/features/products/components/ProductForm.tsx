import {useForm} from "react-hook-form";
import {ProductFormSchema, productFormSchema} from "./product-form-schema.ts";
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

interface ProductFormProps {
  onSubmitFn: (data: ProductFormSchema) => void;
  defaultFormState: ProductFormSchema;
  isLoading: boolean;
}

const ProductForm = ({onSubmitFn, defaultFormState, isLoading}: ProductFormProps) => {
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
    reset
  } = useForm<ProductFormSchema>({
    defaultValues: defaultFormState,
    resolver: zodResolver(productFormSchema)
  });

  const onSubmit = (data: ProductFormSchema) => {
    reset(defaultFormState);
    onSubmitFn(data);
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
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting || isLoading} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default ProductForm;

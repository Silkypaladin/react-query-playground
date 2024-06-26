import {z} from "zod";


export const productFormSchema = z.object({
  name: z.string().min(5).max(100),
  price: z.coerce.number().nonnegative(),
  description: z.string().min(30).max(1000),
  image: z.string(),
  category: z.string().nonempty(),
  company: z.string().nonempty()
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;

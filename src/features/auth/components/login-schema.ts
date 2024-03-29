import {z} from "zod";

export const loginFormSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(5)
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

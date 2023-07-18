import {useForm} from "react-hook-form";
import {Button, FormControl, FormErrorMessage, FormLabel, Input, Stack} from "@chakra-ui/react";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginFormSchema, loginFormSchema} from "./login-schema.ts";
import {login} from "../api/login.ts";
import {useQueryClient} from "react-query";

type Props = {
  onSuccess: (data: LoginFormSchema) => void;
};

const DEFAULT_FORM_STATE = {email: '', password: ''};

const LoginForm = ({onSuccess}: Props) => {
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
    reset
  } = useForm<LoginFormSchema>({
    defaultValues: DEFAULT_FORM_STATE,
    resolver: zodResolver(loginFormSchema)
  });
  const queryClient = useQueryClient();

  const onSubmit = async (data: LoginFormSchema) => {
    reset(DEFAULT_FORM_STATE);
    try {
      await login(data);
      await queryClient.invalidateQueries(['user']);
      onSuccess(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            id='email'
            placeholder='Email'
            {...register('email')}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password} isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            id='password'
            placeholder='Password'
            type='password'
            {...register('password')}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>

      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Log in
      </Button>
    </form>
  )
}

export default LoginForm;

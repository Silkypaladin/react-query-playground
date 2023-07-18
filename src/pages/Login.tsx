import LoginForm from "../features/auth/components/LoginForm.tsx";
import {LoginFormSchema} from "../features/auth/components/login-schema.ts";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const successHandler = (data: LoginFormSchema) => {
    console.log(data);
    navigate('/');
  }
  return <LoginForm onSuccess={successHandler} />
}

export default LoginPage;

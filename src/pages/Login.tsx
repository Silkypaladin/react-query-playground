import LoginForm from "../features/auth/components/LoginForm.tsx";
import {LoginFormSchema} from "../features/auth/components/login-schema.ts";
import {LOGIN} from "../features/auth/data/AuthContext.data.ts";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../features/auth/hooks/useAuthContext.ts";

const LoginPage = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const successHandler = (data: LoginFormSchema) => {
    dispatch({ type: LOGIN, payload: data.email });
    navigate('/');
  }
  return <LoginForm onSuccess={successHandler} />
}

export default LoginPage;

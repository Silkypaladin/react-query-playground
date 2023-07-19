import LoginForm from "../features/auth/components/LoginForm.tsx";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const successHandler = () => {
    navigate('/');
  }
  return <LoginForm onSuccess={successHandler} />
}

export default LoginPage;

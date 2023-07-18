import {useAuthContext} from "../features/auth/context/AuthContext.tsx";
import {Navigate, Outlet} from "react-router-dom";

const GuardedRoute = () => {
  const { state } = useAuthContext();

  if (!state) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}

export default GuardedRoute;

import {Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../features/auth/hooks/useAuthContext.ts";

const GuardedRoute = () => {
  const { state } = useAuthContext();

  if (!state) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}

export default GuardedRoute;

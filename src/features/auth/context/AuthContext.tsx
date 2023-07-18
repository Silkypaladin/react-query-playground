import {createContext, Dispatch, useReducer} from "react";
import {Action, LOGIN, LOGOUT} from "../data/AuthContext.data.ts";
import {Outlet} from "react-router-dom";

type AuthContextType = {
  email: string;
}

const authReducer = (state: AuthContextType | undefined, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, email: action.payload}
    case LOGOUT:
      return undefined;
    default:
      throw new Error('Unsupported Action Type!')
  }
}

export const AuthContext = createContext<{
  state: AuthContextType | undefined,
  dispatch: Dispatch<Action>
}>({state: undefined, dispatch: () => null});

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(authReducer, undefined);
  return (
    <AuthContext.Provider value={{state, dispatch}}><Outlet /></AuthContext.Provider>
  )
}

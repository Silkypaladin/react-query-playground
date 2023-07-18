import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import RootLayout from "../layouts/Root.tsx";
import HomePage from "../pages/Home.tsx";
import LoginPage from "../pages/Login.tsx";
import {AuthContextProvider} from "../features/auth/context/AuthContext.tsx";
import GuardedRoute from "../components/GuardedRoute.tsx";

 createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '*',
    element: <Navigate to='/' replace/>
  }
])

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthContextProvider />}>
      <Route element={<GuardedRoute />}>
        <Route path='/' element={<RootLayout/>}>
          <Route index={true} element={<HomePage />}></Route>
        </Route>
      </Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='*' element={<Navigate to='/' replace/>}></Route>
    </Route>
  )
);

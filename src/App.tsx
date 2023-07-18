import './App.css'
import Private from "./router/private-routes.tsx";
import Public from "./router/public-routes.tsx";
import {BrowserRouter} from "react-router-dom";
import {useMe} from "./hooks/useMe.ts";
import Loading from "./layouts/Loading/Loading.tsx";

function App() {
  const {isLoading, isSuccess, data} = useMe();

  if (isLoading) {
    return <Loading />
  }

  const isLoggedIn = isSuccess && !!data.user;
  return (
    <BrowserRouter>
      {isLoggedIn ? <Private/> : <Public/>}
    </BrowserRouter>
  )
}

export default App

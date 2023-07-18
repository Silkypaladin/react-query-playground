import './App.css'
import {router} from "./router/router.tsx";
import {RouterProvider} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./lib/react-query.ts";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App

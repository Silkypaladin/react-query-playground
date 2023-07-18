import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "../theme.ts";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./lib/react-query.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

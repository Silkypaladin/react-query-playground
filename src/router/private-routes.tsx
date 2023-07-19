import {Navigate, Route, Routes} from 'react-router-dom';
import RootLayout from "../layouts/Root/Root.tsx";
import HomePage from "../pages/Home.tsx";
import {lazy, Suspense} from "react";
import Loading from "../layouts/Loading/Loading.tsx";

const ProductsPage = lazy(() => import('../pages/Products.tsx'));

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index={true} element={<HomePage/>}></Route>
        <Route path='products' element={<Suspense fallback={<Loading />}><ProductsPage /></Suspense>} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace/>}></Route>
    </Routes>
  );
}

export default Private;

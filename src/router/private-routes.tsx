import {Navigate, Route, Routes} from 'react-router-dom';
import RootLayout from "../layouts/Root/Root.tsx";
import HomePage from "../pages/Home.tsx";
import {lazy, Suspense} from "react";
import Loading from "../components/Loading.tsx";

const ProductsPage = lazy(() => import('../pages/Products.tsx'));
const AddProductPage = lazy(() => import('../pages/AddProduct.tsx'));

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path='products' element={<Suspense fallback={<Loading />}><ProductsPage /></Suspense>} />
        <Route path='add-product' element={<Suspense fallback={<Loading />}><AddProductPage /></Suspense>} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace/>}></Route>
    </Routes>
  );
}

export default Private;

import {Navigate, Route, Routes} from 'react-router-dom';
import RootLayout from "../layouts/Root/Root.tsx";
import HomePage from "../pages/Home.tsx";
import {lazy, Suspense} from "react";
import Loading from "../components/Loading.tsx";
import ProductsLayout from "../layouts/Products/Products.tsx";

const ProductsPage = lazy(() => import('../pages/Products.tsx'));
const AddProductPage = lazy(() => import('../pages/AddProduct.tsx'));
const EditProductPage = lazy(() => import('../pages/EditProduct.tsx'));

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path='products' element={<ProductsLayout />}>
          <Route index element={<Suspense fallback={<Loading />}><ProductsPage /></Suspense>} />
          <Route path='add-product' element={<Suspense fallback={<Loading />}><AddProductPage /></Suspense>} />
          <Route path=':productId/edit' element={<Suspense fallback={<Loading />}><EditProductPage /></Suspense>} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/' replace/>}></Route>
    </Routes>
  );
}

export default Private;

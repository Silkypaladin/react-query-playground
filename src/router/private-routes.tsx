import {Navigate, Route, Routes} from 'react-router-dom';
import RootLayout from "../layouts/Root/Root.tsx";
import HomePage from "../pages/Home.tsx";

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index={true} element={<HomePage/>}></Route>
      </Route>
      <Route path='*' element={<Navigate to='/' replace/>}></Route>
    </Routes>
  );
}

export default Private;

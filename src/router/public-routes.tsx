import {Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from "../pages/Login.tsx";

const Public = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='*' element={<Navigate to='/login' replace/>}></Route>
    </Routes>
  );
}

export default Public;

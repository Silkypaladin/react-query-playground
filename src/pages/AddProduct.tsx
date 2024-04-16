import {useNavigate} from "react-router-dom";
import {AddProductForm} from "../features/products/components/AddProductForm.tsx";

const AddProductPage = () => {
  const navigate = useNavigate();
  const successHandler = () => {
    navigate('/products');
  }
  return <AddProductForm onSuccess={successHandler} />
}

export default AddProductPage;

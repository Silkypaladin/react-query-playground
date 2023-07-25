import AddProductForm from "../features/products/components/AddProductForm.tsx";
import {useNavigate} from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();
  const successHandler = () => {
    navigate('/products');
  }
  return <AddProductForm onSuccess={successHandler} />
}

export default AddProductPage;

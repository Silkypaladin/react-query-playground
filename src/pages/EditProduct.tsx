import {useNavigate, useParams} from "react-router-dom";
import {useSingleProduct} from "../features/products/hooks/useSingleProduct.ts";
import {notifyError} from "../lib/hot-toast.ts";
import {EditProductForm} from "../features/products/components/EditProductForm.tsx";
import Loading from "../components/Loading.tsx";

const EditProductPage = () => {
  const {productId} = useParams();
  const {data, isError, isLoading} = useSingleProduct(productId!);
  const navigate = useNavigate();

  if (isError) {
    notifyError('Could not fetch product details!');
    navigate('/products');
  }
  if (isLoading) {
    return <Loading />
  }
  const product = data!.product;
  const editProductSuccess = () => {
    navigate('/products');
  }
  return (
    <EditProductForm
      onSuccess={editProductSuccess}
      category={product.category}
      company={product.company}
      description={product.description}
      image={product.image}
      price={product.price}
      name={product.name}
      _id={product._id}
    ></EditProductForm>
  );
}

export default EditProductPage;

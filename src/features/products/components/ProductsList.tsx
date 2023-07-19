import {SimpleGrid} from "@chakra-ui/react";
import {Product} from "../data/product.ts";
import SingleProduct from "./Product.tsx";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sofa',
    price: 450,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: '2',
    name: 'Sofa',
    price: 450,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: '3',
    name: 'Sofa',
    price: 450,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: '4',
    name: 'Sofa',
    price: 450,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }
]


const ProductsList = () => {
  return (
    <SimpleGrid columns={2} spacing={10} justifyItems={"center"}>
      {
        DUMMY_PRODUCTS.map(product =>
          <SingleProduct
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        )
      }
    </SimpleGrid>
  )
}

export default ProductsList;

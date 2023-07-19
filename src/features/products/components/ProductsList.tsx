import {SimpleGrid} from "@chakra-ui/react";
import SingleProduct from "./SingleProduct.tsx";
import {useProducts} from "../hooks/useProducts.ts";
import {Text} from '@chakra-ui/react';

const ProductsList = () => {
  const { data } = useProducts();


  if (!data?.products.length) {
    return <Text fontSize='2xl'>No data to display.</Text>
  }

  return (
    <SimpleGrid columns={2} spacing={10} justifyItems={"center"}>
      {
        data.products.map(product =>
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

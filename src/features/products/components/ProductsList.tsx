import {Button, SimpleGrid, VStack} from "@chakra-ui/react";
import SingleProduct from "./SingleProduct.tsx";
import {useProducts} from "../hooks/useProducts.ts";
import {Text} from '@chakra-ui/react';
import {NavLink} from "react-router-dom";

const ProductsList = () => {
  const {data} = useProducts();

  return (
    <VStack spacing={'12px'} align={'center'}>
      <NavLink to='add-product'>
        <Button colorScheme='teal' size='md'>
          Add New Product
        </Button>
      </NavLink>
      {
        !data?.products.length ?
          <Text fontSize='2xl'>No data to display.</Text> :
          <SimpleGrid columns={2} spacing={12} justifyItems={"center"}>
            {
              data.products.map(product =>
                <SingleProduct
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  company={product.company}
                  category={product.category}
                />
              )
            }
          </SimpleGrid>
      }
    </VStack>
  )
}

export default ProductsList;

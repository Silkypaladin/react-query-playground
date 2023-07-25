import {Button, SimpleGrid, VStack} from "@chakra-ui/react";
import SingleProduct from "./SingleProduct.tsx";
import {useProducts} from "../hooks/useProducts.ts";
import {Text} from '@chakra-ui/react';
import {NavLink} from "react-router-dom";

const ProductsList = () => {
  const {data} = useProducts();
  console.log(data);

  return (
    <VStack spacing={'12px'} align={'center'}>
      <Button colorScheme='teal' size='md'>
        <NavLink to='/add-product'>Add New Product</NavLink>
      </Button>
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

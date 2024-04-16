import {Card, CardBody, Heading, Stack, Image, Text, Divider, CardFooter, Button} from "@chakra-ui/react";
import {Product} from "../data/product.ts";
import {NavLink} from "react-router-dom";

const SingleProduct = ({_id, image, name, price, description}: Product) => {
  return (
    <Card id={_id} maxW='sm'>
      <CardBody>
        <Image
          src={image}
          alt={name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter>
        <NavLink to={_id + '/edit'}>
          <Button variant='solid' colorScheme='teal'>
            Edit
          </Button>
        </NavLink>
      </CardFooter>
    </Card>
  )
}

export default SingleProduct;

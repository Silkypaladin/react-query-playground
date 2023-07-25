import {Card, CardBody, Heading, Stack, Image, Text} from "@chakra-ui/react";
import {Product} from "../data/product.ts";

const SingleProduct = ({_id, image, name, price}: Product) => {
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
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SingleProduct;

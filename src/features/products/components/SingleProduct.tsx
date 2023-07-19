import {Card, CardBody, Heading, Stack, Image, Text} from "@chakra-ui/react";

interface ProductProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

const SingleProduct = ({id, image, name, price}: ProductProps) => {
  return (
    <Card id={id} maxW='sm'>
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

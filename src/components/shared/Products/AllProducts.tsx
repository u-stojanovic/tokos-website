import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number | null;
  categoryId: number;
  images: Image[];
};

type Image = {
  id: number;
  imageUrl: string;
  productId: number;
};

type ListAllProductsProps = {
  products: Product[];
};

export default function ListAllProducts({ products }: ListAllProductsProps) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="10">
      {products.map((product) => (
        <Card key={product.id} maxW="sm">
          <CardBody>
            <Image
              src={
                product.images.length > 0
                  ? product.images[0].imageUrl
                  : "placeholder-image-url"
              }
              alt={product.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                $450{/* ${product.price} */}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

import { Product } from "@/lib/types";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

type ListAllProductsProps = {
  products: Product[];
};

export default function ListAllProducts({ products }: ListAllProductsProps) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="10">
      {products.map((product) => (
        <Card
          key={product.id}
          maxW="sm"
          bg="white"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          transition="transform 0.2s"
          _hover={{ transform: "translateY(-2px)" }}
          className="bg-lightMode-primary dark:bg-darkMode-primary"
        >
          <Link prefetch={true} href={`/products/${product.id}`}>
            <CardBody padding="6">
              <Image
                src={
                  product.images.length > 0
                    ? product.images[0].imageUrl
                    : "placeholder-image-url"
                }
                alt={product.name}
                borderRadius="md"
                objectFit="cover"
                height="200px"
                width="100%"
              />
              <Stack mt="4" spacing="1">
                <Heading fontWeight="bold">{product.name}</Heading>
                <Text fontSize="md" color="gray.600">
                  {product.description}
                </Text>
                <Text fontSize="sm" color="purple">
                  {product.category.name}
                </Text>
                <Text color="blue.500" fontSize="lg" fontWeight="semibold">
                  {product.price ? product.price.toFixed(2) : "150 dinara"}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter padding="4">
              <Button colorScheme="blue" variant="solid" width="full">
                Add to cart
              </Button>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </SimpleGrid>
  );
}

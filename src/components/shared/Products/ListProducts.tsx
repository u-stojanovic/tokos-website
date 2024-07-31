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
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

type ListAllProductsProps = {
  products: Product[];
};

export default function ListProducts({ products }: ListAllProductsProps) {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      spacing={6}
      maxW="70vw"
      margin="0 auto"
      padding={4}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          bg="white"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-0.125em) scale(1.02)" }}
          className="bg-lightMode-surface dark:bg-darkMode-background"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Link prefetch={true} href={`/products/${product.id}`}>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <CardBody padding="1em" display="flex" flexDirection="column">
                <Box
                  as="div"
                  position="relative"
                  overflow="hidden"
                  width="100%"
                  paddingTop="75%"
                >
                  <Image
                    src={
                      product.images.length > 0
                        ? product.images[0].imageUrl
                        : "placeholder-image-url"
                    }
                    alt={product.name}
                    position="absolute"
                    top="0"
                    left="0"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </Box>
                <Stack mt="1em" spacing="0.5em">
                  <Heading
                    fontWeight="bold"
                    fontSize={{ base: "1em", md: "1.25em", lg: "1.5em" }}
                    className="text-lightMode-text dark:text-darkMode-text"
                    isTruncated
                  >
                    {product.name}
                  </Heading>
                  <Text
                    fontSize={{ base: "0.75em", md: "0.875em", lg: "1em" }}
                    className="text-darkMode-surface dark:text-lightMode-surface"
                    isTruncated
                  >
                    {product.description}
                  </Text>
                  <Text
                    color="blue.500"
                    fontSize={{ base: "0.875em", md: "1em", lg: "1.25em" }}
                    fontWeight="semibold"
                  >
                    {product.price ? product.price.toFixed(2) : "150 dinara"}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter padding="0.5em" mt="auto" alignSelf="stretch">
                <Button colorScheme="blue" variant="solid" width="full">
                  Add to cart
                </Button>
              </CardFooter>
            </Flex>
          </Link>
        </Card>
      ))}
    </SimpleGrid>
  );
}

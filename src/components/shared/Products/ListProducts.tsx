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
  Grid,
  GridItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

type ListAllProductsProps = {
  products: Product[];
};

export default function ListProducts({ products }: ListAllProductsProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-lightMode-text dark:text-darkMode-text text-4xl font-raleway py-4 ml-4">
        Svi Proizvodi
      </h1>
      <div className="w-full h-px bg-gray-400 dark:bg-gray-300 drop-shadow-md my-2 mb-4 z-0"></div>
      <Grid
        templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 4, md: 6 }}
        maxW={{ base: "90vw", md: "70vw" }}
        margin="0 auto"
        padding={{ base: 2, md: 4 }}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <Card
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-0.125em) scale(1.05)" }}
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
                        fontSize={{
                          base: "1.25em",
                          md: "1.35em",
                          lg: "1.5em",
                        }}
                        className="text-lightMode-text dark:text-darkMode-text"
                        isTruncated
                      >
                        {product.name}
                      </Heading>
                      <Text
                        fontSize={{
                          base: "1em",
                          md: "1.05em",
                          lg: "1.1em",
                        }}
                        className="text-darkMode-surface dark:text-lightMode-surface"
                        isTruncated
                      >
                        {product.description}
                      </Text>
                      <Text
                        color="blue.500"
                        fontSize={{
                          base: "1em",
                          md: "1.25em",
                          lg: "1.5em",
                        }}
                        fontWeight="semibold"
                      >
                        {product.price
                          ? product.price.toFixed(2)
                          : "150 dinara"}
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
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

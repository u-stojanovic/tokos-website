import { Product } from "@/lib/types";
import { Stack, Heading, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

type ListAllProductsProps = {
  products: Product[];
};

export default function ListProducts({ products }: ListAllProductsProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-lightMode-text dark:text-darkMode-text text-4xl font-raleway py-4 mx-auto sm:mx-14 text-center sm:text-left">
        Svi Proizvodi
      </h1>
      <div className="w-full h-px bg-gray-400 dark:bg-gray-300 drop-shadow-md my-2 mb-4 z-0"></div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 max-w-[90%] mx-auto p-1 md:p-2 lg:p-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between h-full bg-lightMode-background dark:bg-darkMode-background"
          >
            <Link
              prefetch={true}
              href={`/products/${product.id}`}
              className="flex flex-col justify-between h-full"
            >
              <div className="p-3 flex-1 flex flex-col">
                <div className="relative w-full pt-[70%] overflow-hidden">
                  <Image
                    src={
                      product.images.length > 0
                        ? product.images[0].imageUrl
                        : "placeholder-image-url"
                    }
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <Stack mt="3" spacing="2" className="flex-1">
                  <Heading
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    className="text-lightMode-text dark:text-darkMode-text font-bold truncate"
                  >
                    {product.name}
                  </Heading>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    className="text-darkMode-surface dark:text-lightMode-surface truncate"
                  >
                    {product.description}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    className="text-blue-500 font-semibold"
                  >
                    {product.price ? product.price.toFixed(2) : "150 dinara"}
                  </Text>
                </Stack>
              </div>
              <div className="p-2 mt-auto">
                <Button colorScheme="blue" variant="solid" width="full">
                  Add to cart
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

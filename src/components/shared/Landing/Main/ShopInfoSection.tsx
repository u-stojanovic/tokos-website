import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ShopInfoSection() {
  return (
    <section className="w-full h-screen bg-gray-800 py-12 md:py-24 text-gray-900 dark:text-white">
      <div className="container mx-auto grid gap-8 px-4 md:px-6 max-w-6xl">
        <div className="grid gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tokos - The Best Shop
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Discover a curated collection of stylish home decor and furnishings
            to transform your living space.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              altText={product.altText}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    imageSrc: "/placeholder.svg",
    altText: "Product 1",
    title: "Cozy Throw Blanket",
    price: "$39.99",
    link: "#",
  },
  {
    imageSrc: "/placeholder.svg",
    altText: "Product 2",
    title: "Minimalist Vase",
    price: "$24.99",
    link: "#",
  },
  {
    imageSrc: "/placeholder.svg",
    altText: "Product 3",
    title: "Rustic Wood Shelves",
    price: "$59.99",
    link: "#",
  },
  {
    imageSrc: "/placeholder.svg",
    altText: "Product 4",
    title: "Decorative Pillows",
    price: "$29.99",
    link: "#",
  },
];

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  price: string;
  link: string;
}

function ProductCard({
  imageSrc,
  altText,
  title,
  price,
  link,
}: ProductCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <Link href={link} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <img
        src={imageSrc}
        alt={altText}
        width={500}
        height={400}
        className="object-cover w-full h-64 group-hover:opacity-80 transition-opacity"
      />
      <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-base font-medium text-gray-700 dark:text-gray-300">
          {price}
        </p>
        <Button
          size="sm"
          className="mt-2 bg-primary text-primary-foreground hover:bg-primary-dark"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
